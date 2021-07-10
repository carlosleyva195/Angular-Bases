import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    //QUE COSAS CONTIENE ESTE MODULO
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],

    //QUE COSAS QUIERO QUE SEAN VISIBLES AFUERA DE ESE MODULO
    exports:[
        ListadoComponent
    ],

    //SOLO VAN MODULOS
    imports: [
        CommonModule,
    ]
})

export class HeroesModule{

}