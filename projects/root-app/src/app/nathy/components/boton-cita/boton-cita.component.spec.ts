import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonCitaComponent } from './boton-cita.component';

describe('BotonCitaComponent', () => {
  let component: BotonCitaComponent;
  let fixture: ComponentFixture<BotonCitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonCitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
