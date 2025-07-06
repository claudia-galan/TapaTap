import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Header } from "../header/header";

@Component({
  selector: 'app-home',
  imports: [Header],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  private router = inject(Router);

  goToCompra(): void {
    this.router.navigate(['/compra']);
  }
}