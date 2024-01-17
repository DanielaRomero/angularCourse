// Se debe tratar de NO USAR ANY, porque le quita todas las restricciones
// Con any no se puede utilizar el InteliSense ya que no detecta el tipo 
// de dato que se esta utilizando

// Para que el tipo de la funcion dependa del argumento se debe anadir <> despues
// del nombre de la funcion => GENERICOS

export function whatsMyType<T>( argument: T ):  T{

    return argument;
}

// Al volver generica la funcion, cada variable definida como la funcion 
// adquiere un tipo de dato
const amIString = whatsMyType<string>('Hola Mundo'); // String
const amINumber = whatsMyType<number>(100); // Number
const amIArray = whatsMyType<number[]>([1,2,3,4,5]); //Numeric Array

console.log(amIString.split(' '));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));