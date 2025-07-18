// app/header/header.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, RouterLink, RouterLinkActive } from '@angular/router';
import { NgFor, NgClass } from '@angular/common';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgFor, NgClass],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit, OnDestroy {
  public isHomePage: boolean = true;
  
  // ✨ CANVI CLAU: Variable per controlar l'estat del menú mòbil ✨
  public isMenuOpen: boolean = false;
  
  private routerSubscription!: Subscription;

  navItems = [
    { label: 'Inici', path: '/' },
    { label: 'La Nostra Història', path: '/historia' },
    { label: 'El Producte', path: '/producte' },
    { label: 'Compra Ara', path: '/compra' }
  ];
  estaAInici: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.estaAInici = 
    (!this.router.url.includes('historia') && !this.router.url.includes('producte')  && !this.router.url.includes('compra') );
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }


  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }


  closeMenu(): void {
    this.isMenuOpen = false;
  }
}