using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BastArt.Models;
using BastArt.Models.View;

namespace BastArt.Services.Abstraction
{
    public interface IAuthService
    {
        string HashPassword(string password);
        bool VerifyPassword(string actualPassword, string hashedPassword);
        string GetToken(Role role);
        int DecodeToken(string token);
    }
}
