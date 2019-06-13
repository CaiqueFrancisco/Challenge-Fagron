import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from './models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  dataCliente : Cliente;
  tabela: Cliente[];

  //declarando url da api
  readonly clientesUrl = 'http://localhost:5000/api/clientes/';

  //cria a propriedade e instancia do tipo httpClient
  constructor(private http: HttpClient) { }

  //POST
  post(dataCliente : Cliente){
    return this.http.post(this.clientesUrl, dataCliente);
  }

  //GET
  atualizarLista(){
    this.http.get(this.clientesUrl).toPromise().then(dados => this.tabela = dados as Cliente[])
  }

  //PUT
  put(dataCliente : Cliente){
    return this.http.put(this.clientesUrl + dataCliente.id, dataCliente);
  }

  //DELETE
  delete(id : Number){
    return this.http.delete(this.clientesUrl + id);
  }

}