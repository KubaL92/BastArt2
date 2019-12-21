using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BastArt.Database;
using BastArt.Models;

namespace BastArt.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PortfolioTagsController : ControllerBase
    {
        private readonly BastArtDbContext _context;

        public PortfolioTagsController(BastArtDbContext context)
        {
            _context = context;
        }

        // GET: api/PortfolioTags
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PortfolioTag>>> GetPortfolioTags()
        {
            return await _context.PortfolioTags.ToListAsync();
        }


        // GET: api/PortfolioTags/portfolio/5
        [HttpGet("portfolio/{id}")]
        public async Task<ActionResult<Portfolio>> GetPortfolioTagsByPortfolioId(int id)
        {
//            var portfolio = await _context.PortfolioTags
//
//            if (portfolio == null)
//            {
//                return NotFound();
//            }
//
            return Ok();
        }

        // GET: api/PortfolioTags/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PortfolioTag>> GetPortfolioTag(int id)
        {
            var portfolioTag = await _context.PortfolioTags.FindAsync(id);

            if (portfolioTag == null)
            {
                return NotFound();
            }

            return portfolioTag;
        }

        // PUT: api/PortfolioTags/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPortfolioTag(int id, PortfolioTag portfolioTag)
        {
            if (id != portfolioTag.Id)
            {
                return BadRequest();
            }

            _context.Entry(portfolioTag).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PortfolioTagExists(id))
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

        // POST: api/PortfolioTags
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<PortfolioTag>> PostPortfolioTag(PortfolioTag portfolioTag)
        {
            _context.PortfolioTags.Add(portfolioTag);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPortfolioTag", new { id = portfolioTag.Id }, portfolioTag);
        }

        // DELETE: api/PortfolioTags/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<PortfolioTag>> DeletePortfolioTag(int id)
        {
            var portfolioTag = await _context.PortfolioTags.FindAsync(id);
            if (portfolioTag == null)
            {
                return NotFound();
            }

            _context.PortfolioTags.Remove(portfolioTag);
            await _context.SaveChangesAsync();

            return portfolioTag;
        }

        private bool PortfolioTagExists(int id)
        {
            return _context.PortfolioTags.Any(e => e.Id == id);
        }
    }
}
