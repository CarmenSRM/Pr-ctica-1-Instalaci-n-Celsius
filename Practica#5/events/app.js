//Creacion de un objeto con algunas keys que almacenan funciones.
let obj = {
    nombre: 'Carmen', 
    edad: 20, 
    apellido: 'Ramos', 
    keypress: function () {
        return ('Se ha presionado una tecla');
    }, 
    mouseOver: function () {
        return ('El puntero del mouse esta arriba');
    }
}
//Muestra un atributo especifico del objeto.
console.log(obj.nombre);//se coloca el monre del atributo que se necesita despues del punto '.'.
//Otra forma de mostrar un atributo especifico del objeto.
console.log(obj['nombre']);//se coloca el abributo que se necesita entre corchetes []

let myKey = 'nombre';//En una variible almacena la refencia de un atributo
console.log(obj[myKey]);//Utiliza una variable para hacer referencia al atributo nombre y mostrarlo. 

myKey = 'keypress';//cambia el atributo al que hace referencia
console.log(obj[myKey]());//Usa la variable para hacer referencia al atributo y mostrarlo. 
myKey = 'mouseOver';//cambia el atributo al que hace referencia
console.log(obj[myKey]()); //Usa la variable para hacer referencia al atributo y mostrarlo. 

//NOTA IMPORTANTE: no puede invocar una funcion si le cambias el nombre ._.

let myArray = [];

myArray.push(4);
myArray.push('una cadena');
myArray.push(obj);
myArray.push(function () { //funcion definida al vuelo (solo existe aqui, para tomarla se necita guardarla en algo) se mostrará como anonima ya que no cuenta ni con un nombre.
    return("Hola desde el array");
});
console.log(myArray);

//Array de funciones.

let funcArray = []; //Se crea una array vacio.
//Se comienza a llena con funciones una por una. 
funcArray.push(() => {
    console.log("Function 1");
});
funcArray.push(() => {
    console.log("Function 2");
});
funcArray.push(() => {
    console.log("Function 3");
});

//Muestra el contenido de todo el array uno por uno (en este caso solo funciones). 
funcArray.forEach((item => {
    item();
}));

//Se inyecta las dependencias del Emitter 
const Emitter = require('../emisor/emitter.js');

const emtr = new Emitter();//Se crea un emitter en la variable emtr

//Se comienza a utilizar la función on para agregar funciones
emtr.on('greet', () => {
   console.log('Somewhere, someone said hello.'); 
});

emtr.on('greet', () => {
    console.log('Agreeting occurred!');
});

console.log('Hello!');//Imprime el mensaje de Hola
emtr.emit('greet');//Se utiliza emit que esta llamando a toda funcion que se tnega registrada con greet (que en este caso es todo lo que se tiene almacenado en Emitter). 

//se guarda una nueva funcion llamada jump
emtr.on('jump', () => {
    console.log('someone jumped!');
});

console.log(emtr);//Imprime el contenido del objeto emtr
emtr.emit('jump');//Se llama a la funcion jump por medio de emit 