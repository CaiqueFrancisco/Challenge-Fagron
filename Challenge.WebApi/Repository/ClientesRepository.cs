using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Challenge.WebApi.Models;

namespace Challenge.WebApi.Repository
{
    public class ClientesRepository : IClientesRepository
    {
        private readonly ClientesDbContext _context;

        public ClientesRepository(ClientesDbContext ctx)
        {
            _context = ctx;
        }

        public void Add(Clientes cliente)
        {
            _context.Clientes.Add(cliente);
            _context.SaveChanges();
        }

        public Clientes Find(int id)
        {
            return _context.Clientes.FirstOrDefault(u => u.id == id);
        }

        public IEnumerable<Clientes> GetAll()
        {
            return _context.Clientes.ToList();
        }

        public void Remove(int id)
        {
            var entity = _context.Clientes.First(u => u.id == id);
            _context.Clientes.Remove(entity);
            _context.SaveChanges();
        }

        public void Update(Clientes cliente)
        {
            _context.Clientes.Update(cliente);
            _context.SaveChanges();
        }
    }
}
