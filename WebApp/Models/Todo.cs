using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace WebApp.Models
{
    public class TodoContext : DbContext
    {
        public DbSet<Todo> Todos { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=(localdb)\mssqllocaldb;Database=Todo;Integrated Security=True"); // all this prolly wrong
        }
    }

    public class Todo
    {
        public int id { get; set; } // maybe shouldn't be settable? (auto-inc)
        public string listItem { get; set; }
        public bool itemChecked { get; set; }
    }
    
}
