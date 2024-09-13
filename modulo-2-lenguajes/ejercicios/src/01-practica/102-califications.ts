console.log("*** 102-Califications:");

import { values  } from "../01-practica/114-values.js";


/**
 * Dada la calificación de alumnos de una clase en forma de objeto como el siguiente: ....
 * Implementa una función que muestre la media de la clase de forma textual, es decir, 
 * siguiendo el sistema de calificación español:
 * 
 * TIP: Rompe en tantas funciones auxiliares como necesites.
 *
 * TIP: Utiliza el ejercicio "values" para extraer los valores de un objeto. 
 * En Array.prototype también cuentas con otro método que podría resultarte útil para 
 * transformar un array a un único valor.
 */

interface StudentsGrade{
    [nombre: string]:number;
};

type CalificationES = 
"Matrícula de Honor" |  
"Sobresaliente" |
"Notable" |
"Bien" |
"Suficiente" |
"Insuficiente" |
"Muy deficiente";

function getCalificationES(grade:number):CalificationES{
 
    if(grade>10)
        return null;

    if(grade=== 10)
        return "Matrícula de Honor";
    else if (grade<10 && grade>=9)
         return "Sobresaliente";
    else if (grade<9 && grade>=7)
        return "Notable";
    else if (grade<7 && grade>=6)
        return "Bien";
    else if (grade<6 && grade>=5)
        return "Suficiente";
    else if (grade<5 && grade>=4)
        return "Insuficiente";
    else if (grade<4)
        return "Muy deficiente";   
}


function printAverage(classResults:StudentsGrade) {    
   
    let sum:number=0;

    const grades:number[] = values<number>(classResults);   

    grades.map(value => {
            sum = sum + value;           
    });

    console.log(getCalificationES(sum/grades.length));

  }


const eso2o: StudentsGrade = {
    David: 8.25,
    Maria: 9.5,
    Jose: 6.75,
    Juan: 5.5,
    Blanca: 7.75,
    Carmen: 8,
  };

printAverage(eso2o);  

