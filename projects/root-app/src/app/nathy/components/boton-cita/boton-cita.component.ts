import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-anguliemos-boton-cita',
  templateUrl: './boton-cita.component.html',
  styleUrls: ['./boton-cita.component.sass']
})
export class BotonCitaComponent implements OnInit {
  @Input() titulo = 'ENVIAR';

  @Input() gato: string;

  @Output() citaAsignada = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  solicitarCita(): void{
    this.citaAsignada.emit('Su cita para ' + this.gato + ' ha sido asignada para');
  }

}
