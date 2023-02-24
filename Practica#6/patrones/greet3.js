//Creación del objeto. 
function Greetr() {
    this.greeting = "Hello from function constructor";
    this.greet = function () {
        console.log(this.greeting);
    }//función como atributo que muestra otro atributo. 
}

module.exports = new Greetr;//Modulo que exporta un objeto construido.