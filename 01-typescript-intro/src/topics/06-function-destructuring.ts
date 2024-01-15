interface Product {
    description: string,
    price: number,
}
const phone: Product ={
    description: 'Nokia A1',
    price: 250.0
}
const tablet:Product = {
    description: "iPad Air",
    price: 250.0
}

//DESESTRUCTURACION

// Una funcion tiene maximo 3 argumentos, en el caso que tenga mas se recomienda
// crear un objeto

interface TaxCalculationOptions {
    tax: number,
    products: Product[],
}

// Podemos especificar cuando el retorno de una funcion es definido, es decir, en lugar de
// regresar number[], regresamos [number, number]

//Tambien se puede desestruturar en los parametros en lugar de options: TaxCalculationOptions, se utiliza
// ({description, price})

function taxCalculation( options: TaxCalculationOptions ): [number, number]{
    const { tax, products} = options;
    
    let total = 0;
    // Dentro de uuna funcion flecha se puede desestructurar
    // products -> ({price}) es la desestructuracion para solo tener el precio
    products.forEach(({ price }) => {
        total += price;
    })
    return [total, total * tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, totalTax] = taxCalculation({
    products: shoppingCart,
    tax: tax,
});

console.log('Total', total);
console.log('Tax: ', totalTax);

export{}