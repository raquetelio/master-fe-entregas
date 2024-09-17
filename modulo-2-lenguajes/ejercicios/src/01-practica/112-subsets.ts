console.log("*** 112-subsets:");


/*Escribe una función que acepte un string como argumento y devuelva todas las partes finales 
 de dicha palabra:
*/
function subsets(word:string):string[] {

  let result:string[]=[]
  for(let i:number=1; i<word.length;i++)
    result.push(word.substring(i));

  return result;
}

// Ejemplo
console.log(subsets("message")); // ["essage", "ssage", "sage", "age", "ge", "e"]

//Repite el ejercicio anterior sin utilizar arrays auxiliares ni bucles for/do/while.

function subsets2(word:string):string[] {

    return (word+" ").repeat(word.length-1).trimEnd().split(" ")
        .map( (elem,i) => elem.substring(i+1)
    );
  }
  
  // Ejemplo
  console.log(subsets2("message")); // ["essage", "ssage", "sage", "age", "ge", "e"]