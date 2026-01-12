import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo3b',
  imports: [CommonModule],
  templateUrl: './ejemplo3b.html',
  styleUrl: './ejemplo3b.css',
})
export class Ejemplo3b {
  profesores=["Angel", "Pepe", "Antonio", "Marta"]

  productos=[
    {nombre: "Camisa", precio:34},
    {nombre: "Reloj", precio:21},
    {nombre: "Chicle", precio:2},
    {nombre: "Laptop", precio:310},
  ]

  usuario = {
    nombre: "Juan",
    edad: 25
  }
}
