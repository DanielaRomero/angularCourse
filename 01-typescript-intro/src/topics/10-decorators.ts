// Funciones especiales que se apuntan a diferentes objetos
// Puede anadir simbolos, parametros, objetos, etc
function classDecorator<T extends { new (...args: any[]): {}}>(
    constructor: T
){
    return class extends constructor{
        newProperty = 'New Property';
        hello = 'override';
    }
}

// La funcion decoraador se puede adjuntar a las clases
// No se lo pone directamente con el nombre pero con una arroba
@classDecorator
export class SuperClass {
    public myProperty: string = 'Abc123';

    print(){
        console.log('Hola Mundo')
    }
}

console.log( SuperClass );
const myClass = new SuperClass();
console.log(myClass);