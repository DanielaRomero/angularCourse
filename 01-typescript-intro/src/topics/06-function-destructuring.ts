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

const {description: phoneDescription, price: phonePrice} = phone;
console.log( 'Description: ', phoneDescription);
const {description: tabletDescription, price: tabletPrice} = tablet;
console.log( 'Price: ', tabletPrice);
// Una funcion tiene maximo 3 argumentos, en el caso que tenga mas se recomienda
// crear un objeto

interface TaxCalculationOptions {
    tax: number,
    products: Product[],
}

// Podemos especificar cuando el retorno de una funcion es definido, es decir, en lugar de
// regresar number[], regresamos [number, number]

function taxCalculation( options: TaxCalculationOptions ): [number, number]{
    let total = 0;
    // Dentro de uuna funcion flecha se puede desestructurar
    // products -> ({price}) es la desestructuracion para solo tener el precio
    options.products.forEach(({ price }) => {
        total += price;
    })
    return [total, total * options.tax];
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