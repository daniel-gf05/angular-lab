import { Component } from '@angular/core';

// Forma recomendada, separado en ficheros
// @Component({
//   selector: 'app-ejemplo0',
//   imports: [],
//   templateUrl: './ejemplo0.html',
//   styleUrl: './ejemplo0.css',
// })

// Forma no recomendada
@Component({
  selector: 'app-ejemplo0',
  imports: [],
  template: '<p>Hola desde Angular!</p>',
  styles: 'p { color: blue; }',
})

export class Ejemplo0 {
  // Lógica de negocio
}