import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true, // Assegurem que sigui standalone
  imports: [RouterLink, RouterLinkActive, NgFor], // Importacions necessàries
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  // Definim els elements de navegació aquí per a un codi més net
  navItems = [
    { label: 'Inici', path: '/' },
    { label: 'La Nostra Història', path: '/historia' },
    { label: 'El Producte', path: '/producte' },
    { label: 'Compra Ara', path: '/compra' } // Text més directe per a l'acció
  ];
}