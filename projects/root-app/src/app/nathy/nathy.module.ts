import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NathyRoutingModule } from './nathy-routing.module';
import { GatitosComponent } from './components/gatitos/gatitos.component';
import { DetalleGatitosComponent } from './components/detalle-gatitos/detalle-gatitos.component';
import { BotonCitaComponent } from './components/boton-cita/boton-cita.component';



@NgModule({
  declarations: [GatitosComponent, DetalleGatitosComponent, BotonCitaComponent],
  imports: [
    CommonModule,
    NathyRoutingModule
  ]
})
export class NathyModule { }
