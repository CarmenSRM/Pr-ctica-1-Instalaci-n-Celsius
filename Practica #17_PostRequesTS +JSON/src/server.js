const express = require('express'); //Inyexion de dependencias.
const app = express(); //Se declara una app de express.

const personsRoute = require('./routes/person');//Se incluye el router que viene de personas. 

app.use(express.urlencoded({extended: false}));//Parsea peticiones con URLencoded payload (los datos dentro del body) (en este caso especifico no parsea objetos anidados). 
app.set('view engine', 'ejs');//Se declara ejs como motor de vistas. 
app.use(personsRoute);//Se habilita el usar las rutas del archivo de person.
// Se especifica un directorio virtual ('/assets') contenido estatico mapeado a la carpeta fisica ('/public)' 
app.use('/assets', express.static(__dirname + '/public'));

const PORT = process.env.PORT || 3000;//Se efecifica el puerto para que escuche el servidor (el estatico 3000 o resivir algun otro).

app.listen(PORT, ()=>{//Se levanta el servidor y ponerlo a la escucha. 
    //console.log('escuchan en el puerto 3000');
});
