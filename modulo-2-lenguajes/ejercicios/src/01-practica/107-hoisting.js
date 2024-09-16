console.log("*** 107-Hoisting:");
function hoisting() {
  /*
 Apartado A
  function f() {
  console.log(a);
  console.log(g());

  var a = "good job!";
  function g() {
    return a;
  }
  console.log(a);
}

f();
 */

  console.log(
    "Apartado A. Al ejecutarse f, a está declarada gracias al hoisting, pero su valor no se inicializa hasta la línea en que aparece. Por eso no da error pero su valor es undefined"
  );
  console.log("undefined", ", undefined", ", good job!");

  // Apartado B
  /*var a = 1;

(function() {
  console.log(a);
  var a = 2;
  b = 4;
  var c = 3;
})();

console.log(a);
console.log(b);
console.log(c);  
*/

  console.log(
    "Apartado B. Resultado: undefined, la función se define y ejecuta al mismo tiempo, por lo que se ejecuta al principio gracias al hoisting y antes de que a se le asigne el valor. No da error porque gracias al hoisting si está inicializada"
  );
  console.log(
    "después da error porque b no está declarada cuando es inizializada"
  );

  //Apartado C
  try {
    f();
    var a = 1;

    function f() {
      console.log(a);
      b = 4;
      var c = 3;
    }

    console.log(a);
    console.log(b);
    console.log(c);
  } catch (e) {
    console.log("error");
  }

  console.log("Apartado C. Resultado: igual que en el apartado B");

  console.log(
    "In JavaScript, hoisting refers to the built-in behavior of the language through which declarations of functions, variables, and classes are moved to the top of their scope – all before code execution. In turn, this allows us to use functions, variables, and classes before they are declared"
  );
}

hoisting();
