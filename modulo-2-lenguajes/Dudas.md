Cómo montar export/import en los directorios de 01-practica para poder usar un export * en lugar de importar uno a uno:

//import "./01-practica/ejercicio.js";
//import "./01-practica/101-biggest-word.js";
//import "./01-practica/102-califications.js";
//import "./01-practica/114-values.js";

export * from './01-practica-files';


--------------------------

Como se hacía lo de programación defensiva para chequear que el valor de un param es valido
Lo he dejado así en el 102:
 if(grade>10)
        return null;
