var express = require('express');
var app = express();


app.use('/', function(req, res) {
res.send('Hola Mundo');
});


app.listen(3000);
console.log('Servidor ejecutandose en http://localhost:3000/');


module.exports = app;