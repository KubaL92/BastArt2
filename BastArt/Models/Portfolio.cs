using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BastArt.Models
{
    public class Portfolio
    {
        public int Id { get; set; }
        public User User { get; set; }
        public string About { get; set; }
        public List<Graphic> Graphics { get; set; }
    }
}
