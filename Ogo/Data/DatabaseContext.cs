using Microsoft.EntityFrameworkCore;
using Ogo.Data.DeveloperHelpers;
using Ogo.Data.Models;

namespace Ogo.Data
{
    public class DatabaseContext : DbContext
    {
        public DbSet<Student> Students { get; set; }

        public DbSet<Housing> Housings { get; set; }

        public DbSet<Room> Rooms { get; set; }

        public DatabaseContext()
        {
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite(@"Data Source=Data/hosteldata.db");
            
        }
    }
}
