console.log("*** 108-includes:");

/**
 * En ES7 ya existe una función de manejo de arrays llamada Array.includes() 
 * que indica si un determinado valor figura entre los items de un array dado. 
 * Crea una función en ES5 con el mismo comportamiento, es decir, una función que 
 * reciba un array y un valor y devuelva un boolean indicando si el valor está dentro del array.
 */


function includes<T>(array:Array<T>, value:T):boolean {
    return array.find((elem) => elem === value) ? true : false;
  }
  
  // Ejemplo:
  console.log(includes([1, 2, 3], 3)); // true
  console.log(includes([1, 2, 3], 0)); // false