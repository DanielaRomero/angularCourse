import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  get getCapitalizedName(){
    return this.name.toLocaleUpperCase();
  }

  set setCapitalizedName(name: string){

  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeHero(newHero: string = 'Spiderman'):void {
    this.name = newHero;
  }

  changeAge( newAge: number = 26):void {
    this.age = newAge;
  }
}
