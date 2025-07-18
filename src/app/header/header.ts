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

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Subscripció per saber si som a la pàgina d'inici
    this.routerSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isHomePage = (event.urlAfterRedirects === '/');
        // Molt important: tanquem el menú en canviar de pàgina
        this.closeMenu();
      }
    });
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  // ✨ CANVI CLAU: Funció per obrir/tancar el menú mòbil ✨
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // ✨ CANVI CLAU: Funció per tancar el menú (útil per als enllaços) ✨
  closeMenu(): void {
    this.isMenuOpen = false;
  }
}