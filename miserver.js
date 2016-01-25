var express = require('express');
var app = express();
var faker = require('faker');
var _ = require('lodash');
var uniqID = require('uniq-id');


//"endopoint N° 1 /Post
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
//"endopoint N° 2 /company
var generarEmpresa = function() {

	var randomCompany = faker.company.companyName();
	var randomPhone = faker.phone.phoneNumber();
	var randomFinance = faker.finance.accountName();
	return {

		compania: randomCompany,
		telefono: randomPhone,
		finanzas: randomFinance,
	}
}


app.get('/', function (req, res) {
  res.send('SERVIDOR RETO BACKEND');
})

app.get('/post', function (req, res) {
  var cantidad = _.random(5,10)
  var usuarios = _.times(cantidad, generarUsuario)
  res.json(usuarios);
})

app.get('/company', function (req, res) {
  var cantidad = _.random(2,15)
  var empresas = _.times(cantidad, generarEmpresa)
  res.json(empresas);
})


app.listen(3000);
