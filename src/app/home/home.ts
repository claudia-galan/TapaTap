import { Component } from '@angular/core';
import { Header } from "../header/header";
import { Titols } from "../titols/titols";

@Component({
  selector: 'app-home',
  imports: [Header, Titols],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
