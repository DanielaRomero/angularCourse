export interface Passenger{
    name: string,
    children?: string[],
}

const passenger1: Passenger = {
    name: 'Daniela',
}

const passenger2: Passenger = {
    name: 'Melissa',
    children: ['Natalia', 'Elizabeth']
}

// Optional Chaining se utiliza cuando se hace referencia a un valor
// Funciona como una funcion if
const returnChildrenNumber = (passanger : Passenger):number =>{
    // ! le dice a TypeScript que siempre se van a recibir un valor
    // Se llama None Null Acertion Operator
    // const howManyChildren = passenger.children!.lenght;
    const howManyChildren = passanger.children?.length || 0; 
    console.log(passanger.name, howManyChildren);

    return howManyChildren;
};

returnChildrenNumber( passenger1 );