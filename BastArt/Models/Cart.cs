using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BastArt.Models
{
    public class Cart
    {
        public int Id { get; set; }

        public List<string> Items { get; set; }
    }
}
