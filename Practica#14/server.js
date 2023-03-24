const express = require('express'); //Inyexion de dependencias.
const app = express(); //Se declara una app de express.
const port = process.emitWarning.PORT || 3000; //Se efecifica el puerto para que escuche el servidor (el estatico 3000 o resivir algun otro).

// Se especifica un directorio virtual ('/assets') contenido estatico mapeado a la carpeta fisica ('/public)' 
app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

//Primera ruta (nivel raíz '/').
app.get('/', (req, res) => {
    //HTML que contiene la pagina raiz.
    res.send(`<!DOCTYPE html>
        <html lang="en">
            <head> 
                <meta charset="utf-8">
                <link href=/assets/style.css type=text/css rel=stylesheet /><!-- Se hacer referencia al directorio virtual y a la hoja de estilo -->
                <title>Document</title>
            </head>
            <body>
                <h1>Hello world!</h1>
                <p>Este es un parrafo y su contenido debe ser azul</p>
            </body>
        </html>
    `);
});

//Segunda ruta (/personN/:id) resive un parametro dos parametros. 
app.get('/personN/:id', (req,res) => {
    //Basandoce en los parametros recibidos es que se renderiza la pagina personN para imprimer un mensaje.
    res.render('personN', {ID: req.params.id, Qstr: req.query.qrst});
});

//Terceraa ruta (/personMT/:id) resive tres parametros. 
app.get('/personMT/:id', (req,res) => {
    //Basandoce en los parametros recibidos es que se renderiza la pagina personMT para imprimer un mensaje.
    res.render('personMT',{ID: req.params.id, Message: req.query.message, Times:req.query.times });
});

app.listen(port);//Levanta el servidor y lo pone a la escucha. 
