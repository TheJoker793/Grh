using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Grh_Backend.Models;
using AutoMapper;
using Grh_Backend.DTOs;

namespace Grh_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployesController(RhDbContext context, IMapper mapper) : ControllerBase
    {
        private readonly RhDbContext _context = context;
        private readonly IMapper _mapper = mapper;

        // GET: api/Employes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EmployeDto>>> GetEmployes()
        {
            var ListEmployees= await _context.Employes

                .Include(e => e.Departement) // Eager loading
        .Select(e => new EmployeDto
        {
            Cin = e.Cin,
            FirstName = e.FirstName,
            LastName = e.LastName,
            DateOfBirth = e.DateOfBirth,
            Email = e.Email,
            Phone = e.Phone,
            Address = e.Address,
            DepartementId=e.DepartementId,
            DepartementSigle=e.Departement.Sigle
        })
                .ToListAsync();
            var EmpDto = _mapper.Map<List<EmployeDto>>(ListEmployees);
            return Ok(EmpDto);
        }

        // GET: api/Employes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Employe>> GetEmploye(string id)
        {
            var employe = await _context.Employes.FindAsync(id);

            if (employe == null)
            {
                return NotFound();
            }

            return employe;
        }

        // PUT: api/Employes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmploye(string id, Employe employe)
        {
            if (id != employe.Cin)
            {
                return BadRequest();
            }

            _context.Entry(employe).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Employes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Employe>> PostEmploye(SetEmployeDto setEmployeDto)
        {
            var newEmploye=_mapper.Map<Employe>(setEmployeDto);
            _context.Employes.Add(newEmploye);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (EmployeExists(newEmploye.Cin))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetEmploye", new { id = newEmploye.Cin }, newEmploye);
        }

        // DELETE: api/Employes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmploye(string id)
        {
            var employe = await _context.Employes.FindAsync(id);
            if (employe == null)
            {
                return NotFound();
            }

            _context.Employes.Remove(employe);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EmployeExists(string id)
        {
            return _context.Employes.Any(e => e.Cin == id);
        }
    }
}
