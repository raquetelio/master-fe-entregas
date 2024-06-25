console.log("************** PRACTICE *********************");
console.log("Biggest Word");


function biggestWord(phrase: string):string {

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