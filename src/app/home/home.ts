import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Header } from "../header/header";
// import { Header } from "../header/header"; // ✨ ELIMINEM AQUESTA IMPORTACIÓ ✨

@Component({
  selector: 'app-home',
  standalone: true, // Assegura't que sigui standalone
  imports: [Header], // ✨ ELIMINEM HEADER D'AQUÍ ✨
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  private router = inject(Router);

  goToCompra(): void {
    this.router.navigate(['/compra']);
  }
}