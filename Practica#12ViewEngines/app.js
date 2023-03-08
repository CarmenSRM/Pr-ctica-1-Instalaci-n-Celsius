const express = require('express'); 
const app = express(); 

app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs'); 
const port = process.emitWarning.PORT || 3000; 

app.use('/', function (req, res, next){
    console.log('Requeest Url:' + req.url);
    next();
});

app.get('/', function (req,res) {
    res.render('index');
});


app.get('/api', function (req,res) {
    res.json({
        firstname: 'Carmen', 
        lastname: 'Ramos'
    });
});

app.get('/person/:id', function (req,res) {
    res.render('person', {ID: req.params.id});
}); 

app.listen(port);


