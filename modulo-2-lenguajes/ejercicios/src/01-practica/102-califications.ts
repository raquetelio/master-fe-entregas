console.log("************** PRACTICE *********************");
console.log("102-Califications:");

import { values  } from "../01-practica/114-values.js";


interface StudentsGrade{
    [nombre: string]:number;
};

function printAverage(classResults:StudentsGrade) {
    // Implementation here.

    const average:number = 0;
    let sum:number=0;

    const grades:number[] = values<number>(classResults);

    grades.map(value => {
            sum = sum + value;           
    });

    console.log("Average:",sum/grades.length);


    Object.entries(classResults).map(student => {
        console.log("Nota de", student[0], "es", student[1]);

    }

    );
    

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

