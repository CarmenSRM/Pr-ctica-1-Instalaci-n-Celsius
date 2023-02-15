//funciones y modulos
//Se inyecta una dependencia. 
let greet = require('./greet');//Se importa una función desde el archivo greet.js y se guarda en una variable 
greet();//Invoco la función greet

let obj = {};

let persona = {
    nombre: "Carlos",
    apellido: "Ulibarri",
    getName: function () {
        return `${this.nombre} ${this.apellido}`;
    },
    domicilio: {
        calle: "Madero #144",
        colonia: "Centro",
        cp: 28000, 
        municipio:"Colima"
    },
    getDomicilio: function (){
        return `${this.domicilio.calle} Colonia: ${this.domicilio.colonia} CP: ${this.domicilio.cp}, ${this.domicilio.municipio}`;
    }
}
//Se muestra el valor del objeto.
console.log(persona);
//Se imprimen los valore de las keys.
console.log(persona.nombre);
console.log(persona.apellido);
//Se llama e imprime el getName() y getDomicilio() de la clase personas;
console.log(persona.getName());
console.log(persona.domicilio);
console.log(persona.getDomicilio());