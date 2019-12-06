using System.Linq;
using BastArt.Database;
using BastArt.Models;
using BastArt.Models.View;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BastArt.Controllers
{
    public class AuthorizationController : Controller
    {
//        private readonly IAuthService _authService;
        private readonly BastArtDbContext _context;

        public AuthorizationController(BastArtDbContext context)
        {
//            IAuthService authService,
            //            _authService = authService;
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

//            var passwordValid = _authService.VerifyPassword(model.Password, account.Password);
            var passwordValid = account.Password == model.Password;
            if (!passwordValid)
            {
                return NotFound(new { message = "Email or Password is Wrong" });
            }

//            var token = _authService.GetToken(account.Owner.Id);
            var userRole = _context.
                            Roles.
                            SingleOrDefaultAsync(role => role.User.Id == account.User.Id).Result;

            return Ok(new {user = account.User, role = userRole.RoleType });
        }



        [HttpPost("register")]
        public ActionResult<User> RegisterUser([FromBody] RegisterViewModel model)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var emailUniq = _context.Accounts.SingleOrDefault(acc => acc.Email == model.Email);
            if (emailUniq != null) return BadRequest(new { email = "user with this email already exists" });

            var user = new User
            {
                Name = model.Name,
                Surname = model.Surname,
                Email = model.Email

            };
            var account = new Account
            {
                Owner = user,
                Email = model.Email,
                Password = _authService.HashPassword(model.Password)
            };

            _context.Users.Add(user);
            _context.Accounts.Add(account);
            _context.SaveChanges();

            return Ok();
        }
    }
}