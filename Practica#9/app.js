const express = require('express');//Se inyectan las dependencias. 
const app = express();//Se declara la aplicación de express.

app.get('/', (req, res) => {//route handler (root).
  res.send('Hello World, this is the root route');//Se muestra un mensaje en una simple cadena. 
});

app.get('/uno', (req, res) => {//route handler (/uno).
    res.send('Hello World, frome route One');//Se muestra un mensaje en una simple cadena. 
});

app.get('/prueba', (req, res) => {//route handler (/prueba).
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE-edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <!-- <meta name="viewport" >-->
            </head>
            <body>
                <header>
                    <h1> Hello World, frome route Prueba </h1>
                </header>
            </body>
        </html>
    `);//Se muestra un mensaje por medio de html. 
});

//Para que el servidor escuche en el puerto 3000.
app.listen(3000);

// nodemon.cmd .\app.js es el comando con el que puede terminar la practica 