let greet = require ('./greet1'); //Inyecta la dependencia de la función exportada.
greet();//Llama a la varible que almacena a la función exprtada.

let greet2 = require ('./greet2').greet;//Primera forma de inyectar una funcion exprtada con la propiedad del modulo. 
let greet2a = require ('./greet2.js');//Segunda forma de inyectar una funcion exprtada con la propiedad del modulo. 

greet2();//Llama a la varible que almacena a la función exprtada.
greet2a.greet();//Llama a la varible que almacena a la función exprtada.

//Se inyecta el objeto exportado. 
const {greeting} = require('./greet3');
let greet3 = require('./greet3');

console.log(greet3);//Imprime a la varible que almacena a la función exprtada.
greet3.greet();//Llama a la varible que almacena a la función exprtada.
greet3.greeting = "Hello form the app";//Se cambia el valor de la propiedad del objeto.

//Se inyecta el objeto exportado.
let greet3b = require('./greet3');
greet3b.greet();//Llama a la variable que guarda el objeto y a un metodo en especifico. 

//Otra manera de inyectar el objeto exportado
const Greet4 = require('./greet4');//Se inyecta el objeto.
let myGreet = new (Greet4);//Se crea un nuevo objeto. 
myGreet.greet();//Se llama al objeto y a su metodo. 

const greet5 = require('./greet5');//Inyeccion del modulo con varias funciones.

greet5.greet();//Llamado a la primer funsión.
greet5.read();//Llamado a la segunda función.
greet5.sleep();//Llamado a una tercer función. 