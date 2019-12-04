using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BastArt.Models
{
    public class Graphic
    {
        public int Id { get; set; }
        public User User { get; set; }
        public Guid Guid { get; set; }
    }
}
