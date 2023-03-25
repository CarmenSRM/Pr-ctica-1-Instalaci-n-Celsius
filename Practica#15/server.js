const express = require('express'); //Inyexion de dependencias.
const app = express(); //Se declara una app de express.
const port = process.emitWarning.PORT || 3000; //Se efecifica el puerto para que escuche el servidor (el estatico 3000 o resivir algun otro).

// Se especifica un directorio virtual ('/assets') contenido estatico mapeado a la carpeta fisica ('/public)' 
app.use('/assets', express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: false}));//Parsea peticiones con URLencoded payload (los datos dentro del body) (en este caso especifico no parsea objetos anidados) 
app.set('view engine', 'ejs');//Se declara ejs como motor de vistas. 

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

//Primera ruta importante para la práctica (/student). 
//Se renderiza el formulario de la pagina student.
app.get('/student', (req,res) => {//utiliza get porque es solo la vista de una pagina que se utiliza para atrapar los datos. 
    res.render('student');
});
/* 
//Se utiliza send para resivir y mosrtar los datos enviados del formulario.
app.post('/addStudent', (req, res) => {
    res.send(`
        Nombre: ${req.body.nombre} 
        Apellido: ${req.body.edad} 
        NSS ${req.body.nss} 
        Tipo de Sangre: ${req.body.tipoSangre}`
    );
});
*/

//Segunda ruta (/addStudent) muesta los datos.
//Se rederiza la pagina displayData con los datos obtenidos del formulario (/addStudent)
app.post('/addStudent', (req, res) => {
    res.render('displayData', {
        nombre: req.body.nombre, 
        edad:req.body.edad, 
        nss: req.body.nss, 
        tipoSangre: req.body.tipoSangre
    });
});

app.listen(port);//Levanta el servidor y lo pone a la escucha. 
