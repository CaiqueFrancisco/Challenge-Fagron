using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Challenge.WebApi.Models
{
    public class ClientesDbContext : DbContext
    {   //ponte entre as entidades e a tabela
        public ClientesDbContext(DbContextOptions<ClientesDbContext> options)
            : base(options)
        { }

        public DbSet<Clientes> Clientes { get; set; }

    }
}
