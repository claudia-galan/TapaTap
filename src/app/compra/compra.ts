// app/compra/compra.ts

import { Component } from '@angular/core';
import { Header } from '../header/header';
// ✨ CANVI: Importem NgFor i NgStyle per a les directives de la plantilla ✨
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-compra',
  standalone: true,
  // ✨ CANVI: Afegim NgStyle a les importacions del component ✨
  imports: [Header],
  templateUrl: './compra.html',
  styleUrl: './compra.scss'
})
export class Compra {
  colors = [
    { name: 'Groc Llimona',  imgPath: 'tapatapsf.png', colorHex: '#F7DC6F' },
    { name: 'Taronja Foc',   imgPath: 'tapatapsf.png', colorHex: '#E67E22' },
    { name: 'Blau Cel',      imgPath: 'tapatapsf.png', colorHex: '#5DADE2' },
    { name: 'Verd Menta',    imgPath: 'tapatapsf.png', colorHex: '#76D7C4' },
    { name: 'Rosa Corall',   imgPath: 'tapatapsf.png', colorHex: '#F1948A' },
    { name: 'Negre Elegant', imgPath: 'tapatapsf.png', colorHex: '#34495E' }
  ];
}