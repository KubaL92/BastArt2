using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BastArt.Models.Data;

namespace BastArt.Models
{
    public class Portfolio
    {
        public int Id { get; set; }
        public User User { get; set; }
        public List<Graphic> Graphics { get; set; }
        public List<PortfolioTag> Tags { get; set; }
    }
}
