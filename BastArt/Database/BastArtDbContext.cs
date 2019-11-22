using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BastArt.Models;
using Microsoft.EntityFrameworkCore;

namespace BastArt.Database
{
    public class BastArtDbContext: DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Cart> Carts { get; set; }

        public BastArtDbContext(DbContextOptions dbContextOptions) : base(dbContextOptions)
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            => optionsBuilder.UseNpgsql("Host=localhost;Database=BastArtDB;Username=postgres;Password=postgres");


        //for sample data
        //        public BastArtDbContext()
        //        {
        //            AddSampleData();
        //        }
        //
        //        private void AddSampleData()
        //        {
        //            Categories.AddRange(SampleData.Categories);
        //            Users.AddRange(SampleData.Users);
        //            Companies.AddRange(SampleData.Companies);
        //            Services.AddRange(SampleData.Services);
        //        }
    }
}

