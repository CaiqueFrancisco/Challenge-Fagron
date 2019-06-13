using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Challenge.WebApi.Models
{
    public class Clientes
    {
        public int id { get; set; }

        public string nome { get; set; }

        public string sobrenome { get; set; }

        public string cpf { get; set; }

        public string dataNascimento { get; set; }

        public int idade { get; set; }

        public int profissao { get; set; }
    }
}
