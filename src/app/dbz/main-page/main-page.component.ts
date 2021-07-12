import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000,
  }
  
    //INJECCION DE DEPENDENCIAS(ESTAMOS INJECTANDO EL SERVICIO EN EL CONSTRUCTOR DEL MAIN-PAGE-COMPONENT)
    constructor( ){
    }
}
