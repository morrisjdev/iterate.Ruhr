using iterate.Ruhr_Server.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace iterate.Ruhr_Server.Data
{
    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> options) : base(options)
        {
            
        }

        public DbSet<Game> Games { get; set; }

        public DbSet<Field> Fields { get; set; }
    }
}