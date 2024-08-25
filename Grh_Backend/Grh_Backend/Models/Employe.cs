using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Grh_Backend.Models
{
    public class Employe
    {
        [Key]
        public required string Cin { get; set; }
        public required string FirstName { get; set; }
        public required string LastName { get; set;}
        public  DateTime? DateOfBirth { get; set; }
        public  string? Email { get; set; }
        public  string? Phone { get; set; }
        public string? Address { get; set; }
        public int DepartementId { get; set; }
        [ForeignKey("DepartementId")]
        public Departement? Departement { get; set; }
    }
}
