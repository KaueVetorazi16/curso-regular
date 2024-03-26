import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {

  name: string = 'Kaue';
  idade: number = 30;
  job = 'Programador';
  hobbies = ['Jogar futebol', 'Assistir seriados', 'Jogar Video-Game'];
  car = {
    name: "Polo",
    marca: "VW"
  }


}
