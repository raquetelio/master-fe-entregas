console.log("*** 111-reverse-text:");

//Dado un texto cualquiera, invierte el orden de las palabras.

function reverseText(text:string):string[] {
    return text.split(" ").toReversed().join(" ");
  }


console.log(reverseText("Uno dos tres"));
 