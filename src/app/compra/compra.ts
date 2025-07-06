import { Component } from '@angular/core';
import { Header } from '../header/header';
import { NgFor } from '@angular/common'; // Importem NgFor per poder fer el bucle

@Component({
  selector: 'app-compra',
  standalone: true,
  imports: [Header, NgFor], // Afegim NgFor
  templateUrl: './compra.html',
  styleUrl: './compra.scss'
})
export class Compra {
  // Array amb els colors disponibles. Fàcil de mantenir i ampliar!
  colors = [
    { name: 'Groc Llimona', imgPath: 'tapatapsf.png' },
    { name: 'Taronja Foc', imgPath: 'tapatapsf.png' },
    { name: 'Blau Cel', imgPath: 'tapatapsf.png' },
    { name: 'Negre Elegant', imgPath: 'tapatapsf.png' },
    { name: 'Rosa Corall', imgPath: 'tapatapsf.png' },
    { name: 'Verd Menta', imgPath: 'tapatapsf.png' }
  ];
}