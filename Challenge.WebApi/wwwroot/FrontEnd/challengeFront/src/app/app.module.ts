import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesTabelaComponent } from './clientes-tabela/clientes-tabela.component';
import { ClientesService } from './clientes.service';
import { FiltroClientesComponent } from './filtro-clientes/filtro-clientes.component';
import { PrincipalComponent } from './principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesTabelaComponent,
    FiltroClientesComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [ClientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
