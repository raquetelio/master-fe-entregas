console.log("************** PRACTICE *********************");
console.log("114-Values:");


function values(obj) {
  // Implementation here
    return Object.getOwnPropertyNames(obj).entries;
  
}

// Ejemplo:
console.log(values({ id: 31, duration: 310, name: "long video", format: "mp4" })); // [31, 310, "long video", "mp4"]


const value = (obj,pos) =>  obj[pos];