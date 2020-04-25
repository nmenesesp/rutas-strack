import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleGatitosComponent } from './detalle-gatitos.component';
import { Router } from '@angular/router';

describe('DetalleGatitosComponent', () => {
  let component: DetalleGatitosComponent;
  let fixture: ComponentFixture<DetalleGatitosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleGatitosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleGatitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
