//Práctica 2 -Funciones Parte 1.

//Función clásica simple sin parametros.
function greet(){
    console.log('Hello');
}

greet(); //Invocación. 

console.log(greet); //Muestra el valor de greet =  función.

//Función clásica simple con parametro.
function logGreeting(fin) {
    fin();
}

logGreeting(greet); //Estamos pasando la función greet como parametro e invocandola con el nombre del argumento fin.

//Se utiliza una variable para almacenar una función y funcionar como tal.
let greetMe = function () {
    console.log('Hello from the function expression');
}

greetMe();//Invocación

logGreeting(greetMe);//Estamos pasando la función greetMe como parametro e invocandola con el nombre del argumento fin.

let mifunction = () => {
    //códifo de la función 
}

mifunction();

//Otra forma de crear una función con una variable -con parametros-.
let saludo = (nombre, tratamiento) => {
    console.log('Hola ' + tratamiento + ' ' + nombre);
}

saludo('Miguel', 'Sr.');//Invocamos

//Otra forma de crear una función con una variable -con parametros-.
let cuadrado = nuevo => {
    return numero * numero;
}

//Forma de crear funciones con variables y que son conrtas.  
let saludo2 = (nombre, tratamiento) => console.log('Hola' + tratamiento + ' ' + nombre);

let cuadrado2 = numero => numero * numero;


//Más formas de hacer funciones e invocarlas. 
var cuadrado3 = function(numero){
    return numero * numero;
}

function cuadrado1 (numero){
    return numero * numero;
}
console.log(cuadrado1(9));

let cuadrado4 = numero => {
    return numero * numero;
}
console.log(cuadrado4(8));

let cuadrado5 = numero => numero * numero;
console.log(cuadrado5(7));

