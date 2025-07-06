import { Component } from '@angular/core';
import { Header } from '../header/header';
import { RouterLink } from '@angular/router'; 

@Component({
  selector: 'app-la-nostra-historia',
  standalone: true,
  imports: [Header, RouterLink], 
  templateUrl: './la-nostra-historia.html',
  styleUrl: './la-nostra-historia.scss'
})
export class LaNostraHistoria {

}