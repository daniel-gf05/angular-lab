import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo2',
  imports: [],
  templateUrl: './ejemplo2.html',
})
export class Ejemplo2 {
  // Atributos
  counter = 1

  // Métodos
  incrementar(){
    this.counter++
  }
}
