import { Component } from "@angular/core";

// Una clase se convierte en componente cuando se utiliza el decorador
// Component desde Angular/Core
/*
@Component({
  selector: 'app-counter',
  template: '<h1>Hola Counter</h1>',
})
export class CounterComponent {

}*/

// CREACION CON SNIPPETS
// Se escribe a- y en los snippets se busca la opcion component


@Component({
  selector: 'app-counter',
  // Para hacer un string multilinea se utilizan backstrips
  template: `
  <h3>Counter: {{ counter }}</h3>

  <button (click)='increaseBy(+1)'>+1</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>

  <hr>


  `
})

export class CounterComponent {
  public counter: number= 10;

  constructor() { }

  increaseBy(value: number):void {
    this.counter += value;
  }

  resetCounter(): void{
    this.counter = 10;
  }


}
