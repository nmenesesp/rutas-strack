import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GatitosComponent } from './components/gatitos/gatitos.component';
import { DetalleGatitosComponent } from './components/detalle-gatitos/detalle-gatitos.component';
import { AdminRoleGuard } from './guards/admin-role.guard';
import { AuthenticatedGuard } from '../seguridad/guards/authenticated.guard';


const routes: Routes = [
    { path: 'gatitos', component: GatitosComponent},
    { path: 'detalle-gatito/:id', component: DetalleGatitosComponent, data: {titulo: 'DETALLE DE GATITOS', autor: 'Nathy'},
      canActivate: [AdminRoleGuard]   },
    { path: 'citas/:id', component: DetalleGatitosComponent, data: {titulo: 'CITA PARA GATITOS', autor: 'Nathy'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NathyRoutingModule { }
