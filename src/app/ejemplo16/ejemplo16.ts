import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-ejemplo16',
  imports: [MatButtonModule, MatIconModule, FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './ejemplo16.html',
  styleUrl: './ejemplo16.css',
})
export class Ejemplo16 {

}