const express = require('express'); //Inyexion de dependencias.
const router = express.Router(); //Instalación del "router" al que se le asocian las rutas.

//Primera ruta importante para la práctica (/student). 
//Se renderiza el formulario de la pagina student.
router.get('/student', (req, res) => {//utiliza get porque es solo la vista de una pagina que se utiliza para atrapar los datos. 
    res.render('student');
});

//Se rederiza la pagina displayData con los datos obtenidos del formulario (/addStudent).
router.post('/addStudent', (req, res) => { 
    res.render('displayData', {
        nombre: req.body.nombre, 
        edad: req.body.edad, 
        nss: req.body.nss, 
        tipoSangre: req.body.tipoSangre
    });
});

module.exports = router; // se exporta el router de express