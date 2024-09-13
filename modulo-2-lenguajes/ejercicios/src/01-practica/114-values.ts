console.log("*** 114-Values:");

//Escribe una función que devuelva una lista de valores de todas las propiedades de un objeto:

export function values<T>(obj: Object): T[] {    
  return Object.values(obj);
}

// Ejemplo:
console.log(values({ id: 31, duration: 310, name: "long video", format: "mp4" })); // [31, 310, "long video", "mp4"]


//Evita añadir las propiedades heredadas en caso de ser instancia de una clase:
// Ejemplo:
function Person(name: string) {
  this.name = name;
}

Person.prototype.walk = function() {
  console.log("I'm walking");
};

var john = new Person("John");
console.log(values(john)); // ["John"]; en vez de ["John"; function() { console.log("I'm walking"); }]