import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Ignacia';
  genero: string = 'femenino';
  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  };

  //i18SelectPlural
  clientes: string[] = ['Ignacia', 'Renato', 'Ninette', 'Nicolas'];
  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  };

  cambiarCliente() {
    this.nombre = 'Renato';
    this.genero = 'masculino';
  }

  borrarCliente() {
    this.clientes.pop();
  }


  //KeyValue pipe

  persona = {
    nombre: 'Nicolas',
    edad: 37,
    direccion: 'Concepcion'
  }

  //JsonPipe

  heroes = [{
    nombre: 'Superman',
    vuela: true
  }, {
    nombre: 'batman',
    vuela: false
  }]

  //Async Pipe

  miObservable = interval(5000); // 0 , 1, 2, 3,4 ,5 ,6 ,7...

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Tenemos data de promesa")
    }, 3500);
  });

}
