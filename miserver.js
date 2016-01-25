var express = require('express');
var app = express();
var faker = require('faker');
var _ = require('lodash');
var uniqID = require('uniq-id');



var generarUsuario = function(){
  var randomName = faker.name.findName();
  var randomId= uniqID.generateUUID('xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx', 62)();
  var randomEmail = faker.internet.email();
  var randomImage = faker.image.imageUrl(640,480,"people");
  var randomContenido= faker.lorem.sentence();
  var randomDate = faker.date.between('2015-01-01', '2015-12-31');
  return {
    id: randomId,
    nombre: randomName,
    contenido: randomContenido,
    fecha: randomDate,
    email: randomEmail,
    imagen: randomImage,
    
    
    
  }

}

app.get('/', function (req, res) {
  res.send('Mi primer servidor!');
})

app.get('/post', function (req, res) {
  var cantidad = _.random(5,10)
  var usuarios = _.times(cantidad, generarUsuario)
  res.json(usuarios);
})

app.get('/amigos', function (req, res) {
  res.send('Mis amigos');
})


app.listen(3000);
