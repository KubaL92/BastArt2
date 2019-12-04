using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BastArt.Models
{
    public class Role
    {
        public int Id { get; set; }
        public User User { get; set; }
        public string RoleType { get; set; }
    }
}
