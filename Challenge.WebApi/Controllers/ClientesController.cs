using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Challenge.WebApi.Models;
using Challenge.WebApi.Repository;
using Microsoft.AspNetCore.Mvc;

namespace Challenge.WebApi.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    public class ClientesController : Controller
    {
        private readonly IClientesRepository _userRepository;

        public ClientesController(IClientesRepository userRep)
        {
            _userRepository = userRep;
        }


        [HttpGet]
        public IEnumerable<Clientes> GetAll()
        {
            return _userRepository.GetAll();
        }

        [HttpGet("{id}", Name = "GetUser")]
        public IActionResult GetById(int id)
        {
            //quando o GetById for invocado ele vai atribuir o ID na URL
            //ao parametro do método id
            var user = _userRepository.Find(id);
            if (user == null)
                return NotFound();//caso não encontre o usuário retorna o 404
            else
                return new ObjectResult(user);
        }

        [HttpPost]
        public IActionResult Create([FromBody] Clientes cliente)
        {
            if (cliente == null)
                return BadRequest();

            _userRepository.Add(cliente);

            return Ok(new { id = cliente.id });
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody] Clientes cliente)
        {
            if (cliente == null || cliente.id != id)
                return BadRequest();

            var _cliente = _userRepository.Find(id);

            if (_cliente == null)
                return NotFound();

            _cliente.nome = cliente.nome;
            _cliente.sobrenome = cliente.sobrenome;
            _cliente.cpf = cliente.cpf;
            _cliente.dataNascimento = cliente.dataNascimento;
            _cliente.idade = cliente.idade;
            _cliente.profissao = cliente.profissao;

            _userRepository.Update(_cliente);
            return new NoContentResult(); //retorna codigo 204, servidor processou o request
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var cliente = _userRepository.Find(id);

            if (cliente == null)
                return NotFound();

            _userRepository.Remove(id);
            return new NoContentResult();
        }

    }
}
