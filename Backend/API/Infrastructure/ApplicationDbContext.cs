using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Model;
using Microsoft.CodeAnalysis.Options;
using Microsoft.EntityFrameworkCore;

namespace API.Infrastructure
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Animation> Animations { get; set; }
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
        {
            
        }
    }
}