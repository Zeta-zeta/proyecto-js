const conexion=require('../Database/db');

//Se acuerdan que en los metodos post salian una direccion como ('/save ')
// pues son estas , con eso llama a los metodos de aqui encargados de la base de datos 
exports.save=(req,res)=>{

  const xdni= req.body.dni; //esta sintaxis esta llamando (req) del body(body= etiqueta que esta en el hmtl "cuerpo") al valor que tiene input(dni)  
  const xnombres=req.body.nombres; //los input denle el valor de id = "nombre del atributo de la tabla" name = " nombre del atributo de la tabla"
  const xapellidos=req.body.apellidos;
  const xcorreo=req.body.correo;
  conexion.query('insert into empleado SET ?',{dni:xdni,nombres:xnombres,apellidos:xapellidos,correo:xcorreo},(error,result)=>{
                                              //Esto ya vimos muchas veces asi que no necesito explayarme , esta seteabdi los parametros en la query 
    if(error){
      res.render('nuevoempleado',{mensaje:error});
        //si hay erro redirecciona 
    }else{
      res.redirect('/listarempleado');
      //si sale bien pues ya saben  
    }
  })

}

exports.update=(req,res)=>{ //este es el mismo que el insertar , solo es para guardar 

  const xid= req.body.id
  const xdni= req.body.dni;
  const xnombres=req.body.nombres;
  const xapellidos=req.body.apellidos;
  const xcorreo=req.body.correo;

  conexion.query('UPDATE empleado SET ?  WHERE idempleado = ?',[{dni:xdni,nombres:xnombres,apellidos:xapellidos,correo:xcorreo},xid],(error,result)=>{

    if(error){
      res.render('editarempleado',{mensaje:error});
    }
    else{
      res.redirect('/listarempleado')
    }
  })
}

exports.save2=(req,res)=>{

  const xnombre=req.body.nombre; //los input denle el valor de id = "nombre del atributo de la tabla" name = " nombre del atributo de la tabla"
  const xcategoria=req.body.categoria;
  const xprecio = req.body.precio
  const xstock = req.body.stock
  conexion.query('insert into producto SET ?',{nombreproducto:xnombre,categoria:xcategoria,precio:xprecio,stock:xstock},(error,result)=>{
                                              //Esto ya vimos muchas veces asi que no necesito explayarme , esta seteabdi los parametros en la query 
    if(error){
      res.render('nuevoproducto',{mensaje:error});
        //si hay erro redirecciona 
    }else{
      res.redirect('/listarproducto');
      //si sale bien pues ya saben  
    }
  })

}

exports.update2=(req,res)=>{

  const xid=req.body.id
  const xnombre=req.body.nombre; //los input denle el valor de id = "nombre del atributo de la tabla" name = " nombre del atributo de la tabla"
  const xcategoria=req.body.categoria;
  const xprecio = req.body.precio
  const xstock = req.body.stock
  conexion.query('update producto SET ? where idproducto= ?',[{nombreproducto:xnombre,categoria:xcategoria,precio:xprecio,stock:xstock},xid],(error,result)=>{
                                              //Esto ya vimos muchas veces asi que no necesito explayarme , esta seteabdi los parametros en la query 
    if(error){
      res.render('editarproducto',{mensaje:error});
      console.log(error);
        //si hay erro redirecciona 
    }else{
      res.redirect('/listarproducto');
      //si sale bien pues ya saben  
    }
  })

}