namespace Grh_Backend.DTOs
{
    public class EmployeDto
    {
        public required string Cin { get; set; }
        public required string FirstName { get; set; }
        public required string LastName { get; set; }
        public  DateTime? DateOfBirth { get; set; }
        public string? Email { get; set; }
        public string? Phone { get; set; }
        public string? Address { get; set; }
        public int DepartementId { get; set; }
        public string? DepartementSigle {get;set;} 
    }
}
