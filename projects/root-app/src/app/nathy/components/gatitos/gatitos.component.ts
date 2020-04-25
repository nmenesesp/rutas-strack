import { Component, OnInit, OnChanges, ContentChildren, ContentChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../seguridad/services/login.service';
import { BotonCitaComponent } from '../boton-cita/boton-cita.component';

@Component({
  selector: 'app-anguliemos-gatitos',
  templateUrl: './gatitos.component.html',
  styleUrls: ['./gatitos.component.sass']
})
export class GatitosComponent implements OnInit, OnChanges {

  titulo = "NO ESTÁ LOGUEADO, ADIOS!";
  mensajeServidor = "";

  listaGatitos: any[] = [
    {id: 1, nombre: 'Lupe', edad: 5, color: 'blanca-negra'},
    {id: 2, nombre: 'Pepe', edad: 2, color: 'gris'},
    {id: 3, nombre: 'Carlota', edad: 1, color: 'blanca'},
    {id: 4, nombre: 'Mustafa', edad: 8, color: 'naranja'}
  ];

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
      if(this.loginService.hasToken()) {
        this.titulo = "SUPER TE AUTENTICASTE";
      }
  }

  ngOnChanges(){

  }

  navigate(id): void{
    this.router.navigate(['/detalle-gatito', id]);
  }

}
