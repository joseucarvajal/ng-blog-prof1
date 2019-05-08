import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/shared/model/producto.model';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {

  producto: Producto;

  constructor() { }

  ngOnInit() {
    this.producto = new Producto();
  }

  guardar() {
    alert(JSON.stringify(this.producto));
  }
}
