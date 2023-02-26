const express = require('express')//Se inyectan las dependencias. 
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

//Para que el servidor escuche en el puerto 3000.
app.listen(3000)