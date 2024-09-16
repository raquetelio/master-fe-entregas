console.log("*** 106-Dice:");

/*
Empleando el concepto de closure, emula el comportamiento de 2 dados.

Utiliza un closure para almacenar el resultado de tirar 2 dados, y encapsula junto a estos datos, métodos que implementen la siguiente funcionalidad:

Hacer reset, poner a undefined o null ambos resultados.
Tirar los dados. TIP: Usa Math.random() para tiradas aleatorias.
Imprimir el resultado por consola. Ten en cuenta lo siguiente:
Informa al usuario que debe tirar primero cuando corresponda.
Si saca doble 6, ¡dale un premio!
*/

function Dices(){   

    let result1:number;
    let result2:number;   

    function throwDice():number {
        return Math.ceil(Math.random()*6);
    }

    function checkWinner():void{
        if(result1==6 && result2==6)
            console.log("Winner!!");
    }

    function showResult():void{
        console.log("Result", result1, result2);
    }

return {
     init():void{
        console.log("Throw dices...")           
    },
     reset():void{
        result1 = null;
        result2 = null;
        showResult();
    },  
    throwDices():void {             
        result1 = throwDice();
        result2 = throwDice();    
        showResult();
        checkWinner();
    }  

}

}
const dicesGame = Dices();

dicesGame.init();
dicesGame.throwDices();
dicesGame.reset();






