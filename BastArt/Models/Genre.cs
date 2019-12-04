using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BastArt.Models
{
    public class Genre
    {
        public int Id { get; set; }
        public User User { get; set; }
        public string GenreType { get; set; }
    }
}
