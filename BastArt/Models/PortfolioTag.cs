using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BastArt.Models.Data;

namespace BastArt.Models
{
    public class PortfolioTag
    {
        public int Id { get; set; }
        public Tag Tag { get; set; }
    }
}
