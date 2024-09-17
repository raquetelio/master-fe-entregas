console.log("*** 113-this:");

/**
 * ¿Cual es la salida de los logs en el siguiente código? Intenta razonar, no te limites a ejecutar la solución.
*/
var surname = "Pérez";
var person = {
  name: "Juan",
  surname: "González",
  wife: {
    name: "Ana",
    surname: "Jiménez",
    getSurname: function() {
      return this.surname;
    },
  },
};

console.log(person.wife.getSurname()); //Jiménez porque es el surname de this, que es person.wife
var surnameFunction = person.wife.getSurname;
try{
console.log(surnameFunction()); //error, porque no hay un objeto que llame a surnameFunction y this es undefined
} catch (error){console.log(error)};

console.log(surnameFunction.call(person)); //Gonzalez porque toma el this del objeto que lo llama
 