//Práctica 3 -Funciones Parte 2.
//Interpolaciones y funciones.

//Función clásica simple sin parametros.
function greet() {
    console.log('Hello');
}

//Variable que almacena función y funciona como tal, ademas de resivir una función como parametro.
let logGreeting = (miParametro) => miParametro(); 
logGreeting (greet); //Invocación.

let logGreeting1 = (miParametro) => miParametro();
logGreeting1(function (){
    console.log('Hello from a function created on the fly');
});

// Función de interpolación de strings "clasica"

let logGreeting2 = (miNombre, miColor) => {
    console.log("Hola " + miNombre + " buenos días! Tu color favorito es el " + miColor);
}

logGreeting2("Carlos", "azul"); 

//Datos de prueba.
let color = "rojo";
let talla = "M";
let modelo = "Clasico";

console.log("Juan tiene una playera talla " + talla + " de color " + color + " modelo " + modelo); // Interpolación de strings "clasica".
//Interpolación “template strings”.
console.log(`Juan tiene una playera 
talla ${talla} 
de color ${color}
modelo ${modelo}`);