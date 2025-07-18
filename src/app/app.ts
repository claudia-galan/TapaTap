import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header'; // ✨ IMPORTEM EL HEADER AQUÍ ✨
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Header, // ✨ AFEGIM HEADER A LES IMPORTACIONS ✨
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}