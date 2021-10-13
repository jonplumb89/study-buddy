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
    public class BootcampQuestionsController : ControllerBase
    {
        private readonly BootcampContext _context;

        public BootcampQuestionsController(BootcampContext context)
        {
            _context = context;
        }

        // GET: api/BootcampQuestions
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BootcampQuestion>>> GetBootcampQuestions()
        {
            return await _context.BootcampQuestions.ToListAsync();
        }

        // GET: api/BootcampQuestions/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BootcampQuestion>> GetBootcampQuestion(int id)
        {
            var bootcampQuestion = await _context.BootcampQuestions.FindAsync(id);

            if (bootcampQuestion == null)
            {
                return NotFound();
            }

            return bootcampQuestion;
        }

        // PUT: api/BootcampQuestions/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBootcampQuestion(int id, BootcampQuestion bootcampQuestion)
        {
            if (id != bootcampQuestion.QuestionId)
            {
                return BadRequest();
            }

            _context.Entry(bootcampQuestion).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BootcampQuestionExists(id))
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

        // POST: api/BootcampQuestions
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<BootcampQuestion>> PostBootcampQuestion(BootcampQuestion bootcampQuestion)
        {
            _context.BootcampQuestions.Add(bootcampQuestion);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBootcampQuestion", new { id = bootcampQuestion.QuestionId }, bootcampQuestion);
        }

        // DELETE: api/BootcampQuestions/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBootcampQuestion(int id)
        {
            var bootcampQuestion = await _context.BootcampQuestions.FindAsync(id);
            if (bootcampQuestion == null)
            {
                return NotFound();
            }

            _context.BootcampQuestions.Remove(bootcampQuestion);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BootcampQuestionExists(int id)
        {
            return _context.BootcampQuestions.Any(e => e.QuestionId == id);
        }
    }
}
