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
  styleUrls: ['./header.scss'] // Canviat de styleUrl a styleUrls
})
export class Header implements OnInit, OnDestroy {
  
  // Variable que determina si estem en una pàgina que no sigui la 'home'
  public isOtherPage: boolean = false;
  
  // Variable per controlar l'estat del menú mòbil
  public isMenuOpen: boolean = false;
  
  private routerSubscription!: Subscription;

  // Items de navegació
  navItems = [
    { label: 'Inici', path: '/' },
    { label: 'La Nostra Història', path: '/historia' },
    { label: 'El Producte', path: '/producte' },
    { label: 'Compra Ara', path: '/compra' }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Subscripció als esdeveniments de navegació per saber en quina pàgina som
    this.routerSubscription = this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Si la URL després de la redirecció no és '/', estem en una altra pàgina
      this.isOtherPage = event.urlAfterRedirects !== '/';
      // Assegurem que el menú es tanqui en canviar de ruta
      this.closeMenu();
    });
  }

  ngOnDestroy(): void {
    // Desfem la subscripció per evitar fuites de memòria
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  // Funció per obrir/tancar el menú mòbil
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Funció per tancar el menú mòbil (útil per als enllaços)
  closeMenu(): void {
    this.isMenuOpen = false;
  }
}