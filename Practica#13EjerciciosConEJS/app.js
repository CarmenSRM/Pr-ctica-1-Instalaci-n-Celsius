const express = require('express'); //Inyexion de dependencias.
const app = express(); //Se declara una app de express.

const port = process.emitWarning.PORT || 3000; //Se efecifica el puerto para que escuche el servidor (el estatico 3000 o resivir algun otro).

// Se especifica un directorio virtual ('/assets') contenido estatico mapeado a la carpeta fisica ('/public)' 
app.use('/assets', express.static(__dirname + '/public'));

//Nuevo
//Se declara el motor de plantillas
app.set('view engine', 'ejs'); //Se le indica que su template engine sera ejs 

//Se crear un log de acciones, el cual indica que fue lo que se hizo por ultima vez al servidor
app.use('/', function (req, res, next){
    console.log('Requeest Url:' + req.url);
    next();
});
/* 
//Primera ruta (nivel raíz '/').
app.get('/', function (req,res) {
    //Renderiza la página
    res.render('index');
});*/

//Segunda ruta ('/api') hace uso y regresa un objeto JSON.
app.get('/api', function (req,res) {
    res.json({
        firstname: 'Carmen', 
        lastname: 'Ramos'
    });
});

//Tercera ruta (/person/:id) resive un parametro. 
app.get('/person/:id', function (req,res) {
    //Renderiza los resultados
    res.render('person', {ID: req.params.id});
}); 

//Nuevo
//Se crea un array que se pasará como parametro a la cuarta ruta
let data = [
    {id : 1, nombre: 'Hugo', apellidos : 'Estrada Ramirez', edad : 19},
    {id : 2, nombre: 'Estela', apellidos : 'Perez Suarez', edad : 18},
    {id : 3, nombre: 'Sabrina', apellidos : 'Contreras Morales', edad : 17}    
];

//Nuevo
//Cuarta ruta (/personas), regresa (o renderiza) un objeto que guarda un array de objetos
app.get('/personas', function(req, res){
    res.render('personas', {personas: data});
});

app.listen(port);//Levanta el servidor y lo pone a la escucha. 


