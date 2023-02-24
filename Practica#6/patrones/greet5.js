let greeting = "Hello from greet 5";//Variable de una cadena. 

//Creación de funciones. 
let greet = () => {
    console.log(greeting);
}

let read = () =>{
    console.log("I'm reading from greet5");
}

let sleep = () => {
    console.log("It's sleeping from greet5");
}

//Modulo que exporta más de una función a la vez. 
module.exports  = {
    greet:  greet,
    read, 
    sleep
}