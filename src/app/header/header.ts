import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  private router = inject(Router);
  onClick(pag: string){
    if (pag === 'historia') {
      this.router.navigate(['historia']);
    } else if (pag === 'producte') {
      this.router.navigate(['producte']);
    } else if (pag === 'compra') {
      this.router.navigate(['compra']);
    } else if (pag === 'contacte') {
      this.router.navigate(['contacte']);
    } else {
      this.router.navigate(['']);
    }
  }
}
