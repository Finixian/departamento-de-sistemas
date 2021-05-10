const express = require('express');
const expresslayout = require('express-ejs-layouts');
const parser = require('body-parser');
const port = process.env.PORT||8080;


const app = express();


app.set('view engine', 'ejs' ); /* asignar el motor de busquedas */
app.use(expresslayout);

app.use(parser.urlencoded({extended:true}));/* ({extended:true}) para evitar usar un codigo depreciado */


app.use(express.static(__dirname+'/public'));

var router = require('./app/routes'); //aqui se declara la ruta al archivo de routes que contiene todas las rutas a las paginas de la pagina Web

app.use('/',router); //aqui se enruta al archivo de routes











/* !!!ESTO SIEMPRE VA ABAJO!!! Asignar el Puerto a usar y el mensaje que se realizo y levanto el servidor correctamente */
app.listen(port,()=>{
    console.log("Servidor activo correctamente");
})