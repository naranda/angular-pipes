import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  nombreLower: string = 'nicolas';
  nombreUpper: string = 'NICOLAS';
  nombreCompleto: string = 'nicolas aranda';

  fecha: Date = new Date(); //fecha actual

}
