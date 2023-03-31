const express = require('express'); //Inyexion de dependencias.
const router = express.Router(); //Instalación del "router" al que se le asocian las rutas.

router.get('/person', (req, res) =>{
    res.send('has solicitado el listado de personas');
});

module.exports = router;