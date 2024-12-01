const express=require('express');
const app=express();

app.set('view engine','ejs');

app.use(express.urlencoded({extended:false}));

app.use('/',require('./router'));
app.use(express.static('public')); // Ruta para archivos CSS,JS, Imagenes, etc

app.listen(3000,()=>{});
