import { Component, OnInit, OnDestroy } from '@angular/core'; // Importem OnInit i OnDestroy
import { Router, NavigationEnd, RouterLink, RouterLinkActive } from '@angular/router'; // Importem Router i NavigationEnd
import { NgFor, NgClass } from '@angular/common'; // ✨ IMPORTEM NgClass ✨
import { Subscription } from 'rxjs'; // Per gestionar la subscripció
import { filter } from 'rxjs/operators'; // Per filtrar els events del router

@Component({
  selector: 'app-header',
  standalone: true,
  // ✨ AFEGIM NgClass A LES IMPORTACIONS ✨
  imports: [RouterLink, RouterLinkActive, NgFor, NgClass],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit, OnDestroy {
  // Propietat que controlarà l'estil
  public isHomePage: boolean = true;
  private routerSubscription!: Subscription;

  // Definim els elements de navegació
  navItems = [
    { label: 'Inici', path: '/' },
    { label: 'La Nostra Història', path: '/historia' },
    { label: 'El Producte', path: '/producte' },
    { label: 'Compra Ara', path: '/compra' }
  ];

  // Injectem el Router
  constructor(private router: Router) {}

  ngOnInit(): void {
    // Ens subscribim als events de navegació
    this.routerSubscription = this.router.events.pipe(
      // Filtrem per quedar-nos només amb el final de la navegació
      filter(event => event instanceof NavigationEnd)
    ).subscribe(event => {
      // Comprovem si la URL actual és la de la pàgina d'inici
      if (event instanceof NavigationEnd) {
        this.isHomePage = (event.urlAfterRedirects === '/');
      }
    });
  }

  ngOnDestroy(): void {
    // Molt important: ens desubscribim per evitar pèrdues de memòria
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}