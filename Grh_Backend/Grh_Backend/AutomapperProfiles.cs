using AutoMapper;
using Grh_Backend.DTOs;
using Grh_Backend.Models;

namespace Grh_Backend
{
    public class AutomapperProfiles:Profile
    {
        public AutomapperProfiles()
        {
            CreateMap<Departement,DepartementDto>().ReverseMap();
            CreateMap<Employe,EmployeDto>().ReverseMap();
            CreateMap<SetEmployeDto,Employe>().ReverseMap();
        }
    }
}
