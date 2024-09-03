console.log("************** PRACTICE *********************");
console.log("102-Califications:");


interface NotasEstudiantes{
    [nombre: string]:number;
};

function printAverage(classResults:NotasEstudiantes) {
    // Implementation here.

    Object.entries(classResults).map(student => {
        console.log("Nota de", student[0], "es", student[1]);

    }

    );
    
    Object.values(classResults).map(student => {

        console.log(student);

    });
  }


const eso2o: NotasEstudiantes = {
    David: 8.25,
    Maria: 9.5,
    Jose: 6.75,
    Juan: 5.5,
    Blanca: 7.75,
    Carmen: 8,
  };

printAverage(eso2o);  

