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
    public class DepartementsController : ControllerBase
    {
        private readonly RhDbContext _context;
        private readonly IMapper _mapper;

        public DepartementsController(RhDbContext context,IMapper mapper)
        {
            _context = context;
            _mapper=mapper;
        }

        // GET: api/Departements
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Departement>>> GetDepartements()
        {
            //return await _context.Departements.ToListAsync();
            var DepartementList=await _context.Departements.ToListAsync();
            var DepartementDto = _mapper.Map<List<DepartementDto>>(DepartementList);
            return Ok (DepartementDto);
        }

        // GET: api/Departements/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Departement>> GetDepartement(int id)
        {
            var departement = await _context.Departements.FindAsync(id);

            if (departement == null)
            {
                return NotFound();
            }
            

            return Ok (_mapper.Map<DepartementDto>(departement));
        }

        // PUT: api/Departements/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDepartement(int id, Departement departement)
        {
            if (id != departement.Id)
            {
                return BadRequest();
            }

            _context.Entry(departement).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DepartementExists(id))
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

        // POST: api/Departements
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Departement>> PostDepartement(DepartementDto departementDto)
        {
            var newDepartement = _mapper.Map<Departement>(departementDto);
            _context.Departements.Add(newDepartement);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDepartement", new { id = newDepartement.Id }, newDepartement);
        }

        // DELETE: api/Departements/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDepartement(int id)
        {
            var departement = await _context.Departements.FindAsync(id);
            if (departement == null)
            {
                return NotFound();
            }

            _context.Departements.Remove(departement);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DepartementExists(int id)
        {
            return _context.Departements.Any(e => e.Id == id);
        }
    }
}
