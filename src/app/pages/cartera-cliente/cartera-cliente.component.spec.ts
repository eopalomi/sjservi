import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteraClienteComponent } from './cartera-cliente.component';

describe('CarteraClienteComponent', () => {
  let component: CarteraClienteComponent;
  let fixture: ComponentFixture<CarteraClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteraClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteraClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
