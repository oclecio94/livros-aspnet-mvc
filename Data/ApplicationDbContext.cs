using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using livros_aspnet_mvc.Models;
using Microsoft.EntityFrameworkCore;

namespace livros_aspnet_mvc.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options): base(options)
        {
            
        }

        public DbSet<EmprestimosModel> Emprestimos {get; set; }
    }
}