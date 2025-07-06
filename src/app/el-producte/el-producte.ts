import { Component } from '@angular/core';
import { Header } from '../header/header'; // Importem el Header
import { RouterLink } from '@angular/router'; // Importem per al botó

@Component({
  selector: 'app-el-producte',
  standalone: true, // Assegura't que sigui standalone
  imports: [Header, RouterLink], // Afegim Header i RouterLink
  templateUrl: './el-producte.html',
  styleUrl: './el-producte.scss'
})
export class ElProducte {

}