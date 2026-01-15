import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface user{
  name: string
  isAdmin: boolean
}

@Component({
  selector: 'app-ejemplo15',
  imports: [CommonModule],
  templateUrl: './ejemplo15.html',
  styleUrl: './ejemplo15.css',
})
export class Ejemplo15 {
  user1:user = {name: 'Daniel', isAdmin:false}
}