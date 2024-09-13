
console.log("*** 104-Clone merge:");

/**
 * 
A. Implementa una función clone que devuelva un objeto clonado a partir de otro:

B. Dados dos objetos cualesquiera, implementa una función merge que mezcle uno sobre otro. 
El objeto resultante debe ser la mezcla de las propiedades del objeto source sobre las del objeto target.
TIP: Usa la función clone del apartado A.
 */
function clone(source: Object): Object {
    return {...source};
}

function merge(source:Object, target:Object):Object{    

    return Object.assign(clone(target),source);

}

//Test
const data = { 
    address:"Avenida de la Palmera",
    city:"Sevilla",
    zipCode: 41092,
}

const eventData = {
    date: "11/10/2024",
    name: "The Javascript programming conference",
}

const copiedData:Object = clone(data);
console.log(data,copiedData,"Equals?",data===copiedData);


console.log("eventData (target)" , eventData);
const merged = merge(data,eventData);
console.log("merged data",merged);
console.log("eventData after merge" , eventData);
console.log("eventData===merged?",eventData===merged);

