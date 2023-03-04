const express = require('express'); //Inyexion de dependencias.
const app = express(); //Se declara una app de express.
const port = process.emitWarning.PORT || 3000; //Se efecifica el puerto para que escuche el servidor (el estatico 3000 o resivir algun otro).

// Se especifica un directorio virtual ('/assets') contenido estatico mapeado a la carpeta fisica ('/public)' 
app.use('/assets', express.static(__dirname + '/public'));

//Se crear un log de acciones, el cual indica que fue lo que se hizo por ultima vez al servidor
app.use('/', function (req, res, next){
    console.log('Requeest Url:' + req.url);
    next();
});

//Primera ruta (nivel raíz '/').
app.get('/', function (req,res) {
    //Se hacer referencia al directorio virtual y a la hoja de estilo
    res.send('<html><head><link href=/assets/style.css type=text/css rel=stylesheet /></head><body><h1>Hello world!</h1></body></html>');
});

//Tercera ruta (/person/:id) resive un parametro. 
app.get('/person/:id', function (req,res) {
    //Basandoce en el parametro recibido es que se imprime el mensaje.
    res.send(`<html><head></head><body><h1> Person: ${req.params.id} </h1></body></html>`);
});

//Segunda ruta ('/api') hace uso y regresa un objeto JSON.
app.get('/api', function (req,res) {
    res.json({
        firstname: 'Carmen', 
        lastname: 'Ramos'
    });
});

app.listen(port);//Levanta el servidor y lo pone a la escucha. 