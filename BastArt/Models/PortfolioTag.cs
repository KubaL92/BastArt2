using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using BastArt.Models.Data;

namespace BastArt.Models
{
    public class PortfolioTag
    {
        public int Id { get; set; }
//        public Portfolio Portfolio { get; set; }
        public Tag Tag { get; set; }
    }
}
