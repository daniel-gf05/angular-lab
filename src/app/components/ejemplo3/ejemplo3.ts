import { CommonModule } from '@angular/common'; // Importe para directivas
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo3',
  imports: [CommonModule],
  templateUrl: './ejemplo3.html',
  styleUrl: './ejemplo3.css',
})
export class Ejemplo3 {
  profesores=["Angel", "Pepe", "Antonio", "Marta"]
}
