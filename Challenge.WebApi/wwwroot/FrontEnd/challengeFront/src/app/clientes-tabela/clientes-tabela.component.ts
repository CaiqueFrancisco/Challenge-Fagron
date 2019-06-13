import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';
import { Cliente } from '../models/cliente';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-clientes-tabela',
  templateUrl: './clientes-tabela.component.html',
  styleUrls: ['./clientes-tabela.component.css']
}) 
export class ClientesTabelaComponent implements OnInit {

  clientes: Cliente[];
  
  //serviço
  constructor(private clientesService: ClientesService, private toastr : ToastrService) { }

  ngOnInit() {
    this.clientesService.atualizarLista();
  }

  //metodo atualiza os dados do objeto dataCliente, com os dados atuais
  Selecionar(cliente : Cliente){
    this.clientesService.dataCliente = Object.assign({}, cliente);
  }

  Deletar(id : Number){
    if(confirm('Realmente quer deletar este cliente?')){
    this.clientesService.delete(id).subscribe(callback=>{
      this.clientesService.atualizarLista();
      this.toastr.warning('Deletado com Sucesso!', 'Challenge Fagron');
      });
    }
  }

}