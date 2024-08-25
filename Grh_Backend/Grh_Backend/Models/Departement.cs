namespace Grh_Backend.Models
{
    public class Departement
    {
        
        public int Id { get; set; }
        public required string Name { get; set; }
        public string? Sigle { get; set; }
        public ICollection<Employe>? Employes { get; set; }
    }
}
