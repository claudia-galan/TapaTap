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
  // Aquesta variable controla quin estil s'aplica al header
  public isHomePage: boolean = true;
  
  private routerSubscription!: Subscription;

  navItems = [
    { label: 'Inici', path: '/' },
    { label: 'La Nostra Història', path: '/historia' },
    { label: 'El Producte', path: '/producte' },
    { label: 'Compra Ara', path: '/compra' }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.routerSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Si la URL és la d'inici, isHomePage serà true. Altrament, serà false.
        this.isHomePage = (event.urlAfterRedirects === '/');
      }
    });
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}