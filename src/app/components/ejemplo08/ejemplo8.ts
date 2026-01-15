import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo8',
  imports: [],
  templateUrl: './ejemplo8.html',
  styleUrl: './ejemplo8.css',
})
export class Ejemplo8 {
  resultado = 0
  sumar(num1:number, num2:number){
    this.resultado = num1+num2;
  }
}
