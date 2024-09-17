console.log("*** 109-primes:");


/*Crea una función tal que, dado un número entero de inicio from y otro de fin to, 
encuentre los números primos entre ellos y los muestre por pantalla.*/


function isPrime(num:number):boolean{   
       
    const absNum:number = Math.abs(num);

    if(absNum<2) return false;

    for (let i:number=2; i<= Math.sqrt(absNum); i++){
        if(absNum%i===0) return false;
    }   
    return true;
}


function showPrimes(from: number, to: number):void {
  for(let i=from; i<=to; i++)
    isPrime(i) ? console.log(i + " is PRIME!") : console.log(i + " is not a prime");  
}

showPrimes(1,60);
//showPrimes(-10,-1);
