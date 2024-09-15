console.log("*** 105-Deep equal:");

/**
 * A. Suponiendo objetos sin anidamiento y con propiedades primitivas, 
 * construye una función que compare el contenido de 2 objetos.

TIP: Recuerda, los objetos tienen un método hasOwnProperty que nos indica si dicho objeto 
tiene o no una propiedad concreta. Ejemplo a.hasOwnProperty("name"), si a tiene una propiedad 
name nos devolverá true, en caso contrario false.


B. Vamos a mejorar la solución del apartado A suponiendo ahora que si puede existir anidamiento 
de objetos.

TIP: Recuerda que el operador typeof en Javascript nos devuelve un string indicando el tipo 
de una variable de entre tipos primitivos, objetos o funciones. Ejemplo, typeof 12 // "number" 
o typeof {} // "object".
 */

/** ChatGPT optimized */
function isEqual(a: Object, b: Object): boolean {
    // Si las propiedades tienen diferente longitud, no son iguales
    const aProps = Object.getOwnPropertyNames(a);
    const bProps = Object.getOwnPropertyNames(b);
  
    if (aProps.length !== bProps.length) {
      return false;
    }
  
    // Verificar si todas las propiedades son iguales
    return aProps.every(prop => b.hasOwnProperty(prop) && b[prop] === a[prop]);
}


var user = { name: "María", age: 30 };
var clonedUser = { name: "María", age: 30 };
const data2 = { 
    address:"Avenida de la Palmera",
    city:"Sevilla",
    zipCode: 41092,
}

const data3 = { 
    address:"Avenida de la Palmera",
    city:"Sevilla",
    zipCode: 41092,
}

console.log(user === clonedUser); // false
console.log(isEqual(user, clonedUser)); // true
console.log(isEqual(data3, data2)); //true
console.log(isEqual(user, data2)); //false


console.log("Is deep equal...");


//ChatGPT optimized

function isDeepEqual(a: any, b: any): boolean {
    // Si ambos son estrictamente iguales, retornar true
    if (a === b) return true;   
  
    // Si uno de los dos es null  retornar false
    if ( a === null || b === null) {
      return false;
    }
  
    // Obtener las propiedades de ambos objetos
    const aProps = Object.getOwnPropertyNames(a);
    const bProps = Object.getOwnPropertyNames(b);
  
    // Comparar longitud de propiedades
    if (aProps.length !== bProps.length) {
      return false;
    }
  
    // Comprobar si todas las propiedades son iguales
    return aProps.every(prop => {
      // Verificar si b tiene la propiedad
      if (!b.hasOwnProperty(prop)) {
        return false;
      }
  
      // Si las propiedades son objetos (y no null), hacer una comparación recursiva
      if (typeof a[prop] === 'object' && typeof b[prop] === 'object') {
        return isDeepEqual(a[prop], b[prop]);
      }
  
      // Comparar valores primitivos
      return a[prop] === b[prop];
    });
  }
  

  

const test = function testDeepEqual() {

var user = {
    name: "María",
    age: 30,
    address: { city: "Málaga", code: 29620},
    friends: ["Juan"],
  };
  var clonedUser = {
    name: "María",
    age: 30,
    address: { city: "Málaga", code: 29620} ,
    friends: ["Juan"],
  };
  
 
  
  console.log(isDeepEqual(user, clonedUser)); // true
 

}


test();