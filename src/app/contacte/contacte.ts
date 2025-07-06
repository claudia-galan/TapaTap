import { Component } from '@angular/core';
import { Header } from '../header/header'; // Importem
import { ReactiveFormsModule } from '@angular/forms'; // Necessari per al formulari

@Component({
  selector: 'app-contacte',
  standalone: true, // Assegura't que sigui standalone
  imports: [Header, ReactiveFormsModule], // Afegim Header i ReactiveFormsModule
  templateUrl: './contacte.html',
  styleUrl: './contacte.scss'
})
export class Contacte {
  // Aquí aniria la lògica per gestionar l'enviament del formulari.
  // De moment, ho deixem preparat.
  onSubmit() {
    alert("Gràcies per contactar! Aviat rebràs una resposta. (Aquesta és una demo, el formulari no s'ha enviat)");
  }
}