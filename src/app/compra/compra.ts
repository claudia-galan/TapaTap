import { Component } from '@angular/core';
import { Header } from '../header/header'; // Importem

@Component({
  selector: 'app-compra',
  standalone: true, // Assegura't que sigui standalone
  imports: [Header], // Afegim Header
  templateUrl: './compra.html',
  styleUrl: './compra.scss'
})
export class Compra {

}