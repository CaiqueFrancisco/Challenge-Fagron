using Challenge.WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Challenge.WebApi.Repository
{
    public interface IClientesRepository
    {
        void Add(Clientes cliente);

        IEnumerable<Clientes> GetAll();

        Clientes Find(int id);

        void Remove(int id);

        void Update(Clientes cliente);
    }
}
