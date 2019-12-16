using System.Linq;
using BastArt.Database;
using BastArt.Models;
using BastArt.Models.View;
using BastArt.Services.Abstraction;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BastArt.Controllers
{
    [Route("api/[controller]")]
    public class AuthorizationController : Controller
    {
        private readonly BastArtDbContext _context;
        private readonly IAuthService _authService;

        public AuthorizationController(BastArtDbContext context, IAuthService authService)
        {
            _authService =  authService;
            _context = context;
        }

        [HttpPost("login")]
        public ActionResult<User> Login([FromBody] LoginViewModel model)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var account = _context.Accounts
                                .Include(acc => acc.User)
                                .SingleOrDefaultAsync(acc => acc.Email == model.Email)
                                .Result;


            if (account == null)
                return NotFound(new { message = "Email or Password is Wrong" });

            var passwordValid = _authService.VerifyPassword(model.Password, account.Password);
            if (!passwordValid)
            {
                return NotFound(new { message = "Email or Password is Wrong" });
            }

            var role = _context.Roles.SingleOrDefault(r => r.User.Id == account.User.Id);
            if (role == null)
                return NotFound(new { message = "Role not found" });

            var token = _authService.GetToken(role);

            return Ok(new {user = account.User, token, role = role.RoleType });
        }



        [HttpPost("register")]
        public ActionResult<User> RegisterUser([FromBody] RegisterViewModel model)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var emailUniq = _context.Accounts.SingleOrDefault(acc => acc.Email == model.Email);
            if (emailUniq != null) return BadRequest(new { email = "user with this email already exists" });

            var user = new User
            {
                FirstName = model.FirstName,
                LastName = model.LastName,
                Email = model.Email

            };

            var role = new Role
            {
                User = user,
                RoleType = "User",

            };

            var account = new Account
            {
                User = user,
                Email = model.Email,
                Password = _authService.HashPassword(model.Password)
            };

            _context.Users.Add(user);
            _context.Roles.Add(role);
            _context.Accounts.Add(account);
            _context.SaveChanges();

            return Ok();
        }
    }
}