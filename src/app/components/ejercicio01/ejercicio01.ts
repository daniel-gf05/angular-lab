import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio01',
  imports: [CommonModule],
  templateUrl: './ejercicio01.html',
  styleUrl: './ejercicio01.css',
})
export class Ejercicio01 {
  numeros = [1, 2, 3, 4, 5, 101]
  isEven(num:number){
    return num%2===0
  }
}
