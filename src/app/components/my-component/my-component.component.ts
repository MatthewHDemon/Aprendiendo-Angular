import { Component } from '@angular/core';


@Component({
    selector: 'my-component',
    templateUrl:'./my-component.component.html'
})
export class MyComponent{

    public titulo: string | undefined;
    public comentario: string | undefined;
    public year: number | undefined;

    constructor() {
        this.titulo = "Hola mundo, soy MyComponent"
        this.comentario = "Este es mi primer componente"
        this.year = 2022;

        console.log(this.titulo, this.comentario, this.year)
        console.log("Componente mi-componente cargado !!");
    }
}