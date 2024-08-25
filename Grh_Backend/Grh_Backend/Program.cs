using Grh_Backend;
using Grh_Backend.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
// Configure CORS for development environment (replace 'http://localhost:4200' with your Angular app's origin if different)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngularDev", builder =>
    {
        builder.WithOrigins("http://localhost:4200")
               .AllowAnyMethod()
               .AllowAnyHeader();
    });
});


builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddAutoMapper(options => options.AddProfile<AutomapperProfiles>());

builder.Services.AddDbContext<RhDbContext>(options=>
options.UseSqlServer(builder.Configuration.GetConnectionString("myConnectionString")));


var app = builder.Build();


// Configure the HTTP request pipeline.
app.UseCors("AllowAngularDev"); // Apply CORS policy in development

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
