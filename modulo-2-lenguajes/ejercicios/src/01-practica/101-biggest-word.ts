console.log("************** PRACTICE *********************");
console.log("*** 101-Biggest Word:");

/*
Crea una función que reciba una frase en formato string y devuelva la palabra más larga. 
En caso de haber varias con longitud máxima que devuelva siempre la primera. 
Ten en cuenta que consideramos una palabra a aquello que esté separado por espacios.
*/

export function biggestWord(phrase: string):string {

    let biggest:string = "";
    
    phrase.split(" ").forEach(
            (elem):void => {                
               if (elem.length>biggest.length )
                  biggest=elem;                
            }
    );   

    return biggest; 

  }
  
  // Ejemplo
  console.log(biggestWord("Esta frase puede contener muchas palabras")); // "contener"
  console.log(biggestWord("Ejercicios básicos de JavaScript")); // "Ejercicios"