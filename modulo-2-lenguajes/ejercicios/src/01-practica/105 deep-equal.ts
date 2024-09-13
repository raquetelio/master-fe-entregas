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


function isEqual(a:Object, b:Object):boolean {
    
    let equal = true;

    Object.getOwnPropertyNames(a).every(elem => {   
        b.hasOwnProperty(elem) && b[elem] === a[elem] ? null : equal= false;
        return  equal;
    });


    return equal;   
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