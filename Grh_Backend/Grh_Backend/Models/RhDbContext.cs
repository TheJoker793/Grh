using Microsoft.EntityFrameworkCore;

namespace Grh_Backend.Models
{
    public class RhDbContext(DbContextOptions<RhDbContext> options) : DbContext(options)
    {
        public DbSet<Departement> Departements { get; set; }
        public DbSet<Employe> Employes { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Employe>()
                .HasOne(d => d.Departement)
                .WithMany(e => e.Employes)
                .HasForeignKey(d => d.DepartementId);

        }
    }
}
