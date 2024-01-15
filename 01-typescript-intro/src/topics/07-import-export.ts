/*  Una importacion/exportacion es una funcionalidad encapsulada 
    Los archivos se vuelven modulos
    De cada archivo podemos exportar modulos especificos
*/
import {Product, taxCalculation} from './06-function-destructuring'

const shoppingCart: Product[] = [{
    description: 'Nokia',
    price: 100,
},
{
  description:  'iPad',
  price: 150,
}];


// Tax = 0.15
const [total, taxTotal] = taxCalculation({
    tax: 0.15,
    products: shoppingCart,
});
console.log('Total', total);
console.log('Tax', taxTotal);

// Al momento de importar un modulo, el modulo no debe tener codigo ejecutable
// dado que ocupa espacio en memoria y se ejecuta con el codigo al que se importa.
 