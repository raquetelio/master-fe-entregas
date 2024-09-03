console.log("************** PRACTICE *********************");
console.log("103-Check arguments:");


function f(input) {
  var result;
  if (input === undefined) {
    result = "Unknown";
  } else if (input === null) {
    result = "";
  } else {
    result = input;
  }
  return result;
}

function f2(input: string):string {  

  return input ?? (input === undefined ? "Unknown" : "");

}

console.log("Initial implementation VS Improved implementation:");

var value:string =undefined;
console.log(f(value),"VS" ,f2(value));

value=null;
console.log(f(value),"VS" , f2(value));

value="Texto cualquiera";
console.log(f(value), "VS" ,f2(value));
