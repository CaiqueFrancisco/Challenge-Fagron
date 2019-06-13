import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';
import { Cliente } from '../models/cliente';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-filtro-clientes',
  templateUrl: './filtro-clientes.component.html',
  styleUrls: ['./filtro-clientes.component.css']
})
export class FiltroClientesComponent implements OnInit {

  clientes: Cliente;

  constructor(private clientesService: ClientesService,
    private toastr : ToastrService) { }

  ngOnInit() {
    this.resetarFormulario();
  }

  resetarFormulario(formulario? : NgForm){
    //se o objeto formulario não for null, então chamo a função de resetar
    if(formulario != null)
    formulario.resetForm();
    this.clientesService.dataCliente = {
        id: 0,
        nome: '',
        sobrenome: '',
        cpf: '',
        dataNascimento: null,
        idade: null,
        profissao: null,
    }
  }

  Inserir(formulario : NgForm){
    if(formulario.value.id == 0)
    this.inserirRecord(formulario);
    else
    this.updateRecord(formulario);
  }

  inserirRecord(formulario : NgForm){
    this.clientesService.post(formulario.value).subscribe(dados => {
      this.toastr.success('Inserido com Sucesso!', 'Challenge Fagron');
      this.resetarFormulario(formulario);
      this.clientesService.atualizarLista();
    });
  }

  updateRecord(formulario : NgForm){
    this.clientesService.put(formulario.value).subscribe(dados => {
      this.toastr.info('Atualizado com Sucesso!', 'Challenge Fagron');
      this.resetarFormulario(formulario);
      this.clientesService.atualizarLista();
    });
  }
}