// app/footer/footer.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, NgIf], // Importem NgIf per poder usar *ngIf a la plantilla
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class Footer implements OnInit, OnDestroy {
  // Propietat que controla si el footer és visible
  public isVisible: boolean = false;
  private routerSubscription!: Subscription;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.routerSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(event => {
      if (event instanceof NavigationEnd) {
        // El footer serà visible si la URL NO és la de la pàgina d'inici ('/')
        this.isVisible = event.urlAfterRedirects !== '/';
      }
    });
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}