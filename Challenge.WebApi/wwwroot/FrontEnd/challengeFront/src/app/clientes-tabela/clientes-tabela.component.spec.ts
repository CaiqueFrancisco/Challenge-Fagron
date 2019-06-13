import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesTabelaComponent } from './clientes-tabela.component';

describe('ClientesTabelaComponent', () => {
  let component: ClientesTabelaComponent;
  let fixture: ComponentFixture<ClientesTabelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesTabelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
