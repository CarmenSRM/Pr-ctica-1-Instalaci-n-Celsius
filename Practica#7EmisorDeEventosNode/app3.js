var Emitter = require('events');//Nueva forma de inyectar la función exportada.
const config = require('./config');

let emtr = new Emitter(); //Se crea un emitter en la variable emtr.

//Se comienza a utilizar la función on para agregar funciones.
emtr.on(config.events.GREET, () => {//Nueva forma de hacerlo.
    console.log('Somewhere, someone said hello.')
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