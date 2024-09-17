console.log("*** 109-primes:");


/*Crea una función tal que, dado un número entero de inicio from y otro de fin to, 
encuentre los números primos entre ellos y los muestre por pantalla.*/


function isPrime(num:number):boolean{
    let divisible:boolean = false;
    let i:number=2;
        
    const absNum:number = Math.abs(num);
    const sqrtNum:number = Math.sqrt(absNum);

    while(!divisible && i<=sqrtNum){
        if(absNum%i++===0) divisible = true; 
    }   

    return !divisible;
}
function showPrimes(from: number, to: number):void {
  for(let i=from; i<=to; i++)
    isPrime(i) ? console.log(i + " is PRIME!") : console.log(i + " is not a prime");

  
}

showPrimes(1,10);
//showPrimes(-10,-1);
