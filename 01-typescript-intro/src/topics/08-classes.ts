// Clases en TypeScript

// Para las clases de TypeScript se necesita encapsular a los parametros
// esto define si van o no a ser visibles de forma global
// en TypeScript el encapsulamiento se lo realiza desde el constructor

export class Person {
    //public name: string;
    //public address: string;

    constructor(public name: string, public address?: string) {
        this.name = name;
        this.address = address;
    }

}
/*
export class Hero extends Person{
    // Extender funciona para acarrear lo que la clase anterior tiene
    // Anade una clase extra de complejidad
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
    ){
        // Super es una funcion especial para llamar el constructor del padre

        super(realName, 'New York');
    }
}*/

// Como clase compuesta
export class Hero {
    
    //public person: Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ){
        // Super es una funcion especial para llamar el constructor del padre

        //this.person = new Person(realName);
    }
}

// Al crear ironman del tipo Hero, en la appweb cambia a Hero en lugar de Person
const tony = new Person('Tony Strak', 'New York');
const ironman = new Hero('Ironman', 45, 'Tony',tony);

console.log(ironman);