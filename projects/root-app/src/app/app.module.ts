import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeguridadModule } from './seguridad/seguridad.module';
import { NathyModule } from './nathy/nathy.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SeguridadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
