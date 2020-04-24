import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToastrModule } from 'ngx-toastr';
import { AngularMaterialModule } from '../external-modules/angularmaterial.module';
import { SeguridadRoutingModule } from './seguridad-routing.module';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ToastrModule.forRoot(),
    AngularMaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class SeguridadModule { }
