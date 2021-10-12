using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BootcampStudyBuddy.Models;

namespace BootcampStudyBuddy.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BootcampFavoritesController : ControllerBase
    {
        private readonly BootcampContext _context;

        public BootcampFavoritesController(BootcampContext context)
        {
            _context = context;
        }

        // GET: api/BootcampFavorites
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BootcampFavorite>>> GetBootcampFavorites()
        {
            return await _context.BootcampFavorites.ToListAsync();
        }

        // GET: api/BootcampFavorites/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BootcampFavorite>> GetBootcampFavorite(int id)
        {
            var bootcampFavorite = await _context.BootcampFavorites.FindAsync(id);

            if (bootcampFavorite == null)
            {
                return NotFound();
            }

            return bootcampFavorite;
        }

        // PUT: api/BootcampFavorites/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBootcampFavorite(int id, BootcampFavorite bootcampFavorite)
        {
            if (id != bootcampFavorite.FavoritesId)
            {
                return BadRequest();
            }

            _context.Entry(bootcampFavorite).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BootcampFavoriteExists(id))
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

        // POST: api/BootcampFavorites
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<BootcampFavorite>> PostBootcampFavorite([FromBody] BootcampFavorite bootcampFavorite)
        {
            _context.BootcampFavorites.Add(bootcampFavorite);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBootcampFavorite", new { id = bootcampFavorite.FavoritesId }, bootcampFavorite);
        }

        // DELETE: api/BootcampFavorites/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBootcampFavorite(int id)
        {
            var bootcampFavorite = await _context.BootcampFavorites.FindAsync(id);
            if (bootcampFavorite == null)
            {
                return NotFound();
            }

            _context.BootcampFavorites.Remove(bootcampFavorite);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BootcampFavoriteExists(int id)
        {
            return _context.BootcampFavorites.Any(e => e.FavoritesId == id);
        }
    }
}
