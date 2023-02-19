//Creación de una función constructora.  
function Emitter() {
    this.events = {};
}

//Se crea un evento llamado on y se le asignan valores (funciones) haciendo uso de las keys que tiene el contructor. 
Emitter.prototype.on = function (type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}

//Se crea un evento llamado emit en el que se hacen la llamada a las funciones que se guardan, resive como parametro el mobre de la función a utilizar . 
Emitter.prototype.emit = function (type) {
    if (this.events[type]) {//Para que solo se muestra la función que se especifica.  
        this.events[type].forEach( function (listener) {
            listener();//Invoca la función
        });
    }
}

module.exports = Emitter; //Se exporta la Emitter para porder acceder a el desde otros archivos. 