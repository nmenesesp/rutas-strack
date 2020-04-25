import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-anguliemos-detalle-gatitos',
  templateUrl: './detalle-gatitos.component.html',
  styleUrls: ['./detalle-gatitos.component.sass']
})
export class DetalleGatitosComponent implements OnInit {

  id: any;
  titulo = '';

  constructor(private rutaActiva: ActivatedRoute) {
    this.rutaActiva.queryParams.subscribe(data => {
      this.id = data.id;
    });

    this.rutaActiva.params.subscribe(data => {
      this.id = data.id;
    });

    this.rutaActiva.data.subscribe(data => {
      this.titulo = data.titulo;
    });
  }

  ngOnInit() {
  }

}
