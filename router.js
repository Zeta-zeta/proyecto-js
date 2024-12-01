const express=require('express');
const router=express.Router(); //estas dos lineas trato de entenederlas pero no puedo ppipipiip

const cnn=require('./Database/db'); //esta variable exporta la conexion a base de datos 

router.get('/',(req,res)=>{ //Esta funcion get redirige al usaurio al Login no esta completa si desean pueden obviarla en su programa 

    res.render('login');

})


router.get('/index',(req,res)=>{//Esta redirecciona al index tener en cuenta si en caso estan programando el listado de productos ahi
    res.render('index');
})

// Listar Empleados
router.get('/listarempleado',(req,res)=>{ //Esta es una ventana a parte del index por eso es que abro su metodo get
            
    cnn.query('select * from empleado',(error,result)=>{ //con este query llamo a la  BD  

        if(error){
            throw error;
        }
        else{
            res.render('listarempleado',{objempleado:result}); //una vez se tenga el resutlado deseado nos redireccionara a donde 
                                                                //hayan seleccionado , no pongan el  "/" por que se les cae el programa solo en esta ocasion 
        }
    });

})

//Crear Registros
router.get('/nuevoempleado',(req,res)=>{
                
    res.render('nuevoempleado'); //Aqui llamo a la otra ventana para registrar  al nuevo usuario
                                // su metodo post lo encontraran mas abajo no se preocupen 
            
})

//Editar Registros
router.get('/editarempleado/:idempleado',(req,res)=>{  //Este es el de editar, ustedes ya sabran lo que significa la query 
    
    const id = req.params.idempleado; //capturo el id para saber cual editar
    cnn.query('SELECT * FROM empleado WHERE idempleado = ?',[id],(error,result)=>{

        if(error){
            throw error;
        }
        else{
            res.render('editarempleado',{objempleado:result[0]}); //una vez todo este correcto el metodo post se ejecutra y te redireccionrara a esta ventana 
        }
    })

})
//Elimiar registro
router.get('/delete/:idempleado',(req,res)=>{ //Aqui esta no muestra ninguna ventana , esta es una query agresiva ya que borra la 
                                                // de la base de datos sin consultar usenla con precacuicon 
    const id = req.params.idempleado; //Aqui caputro el ID 
    cnn.query("DELETE FROM empleado WHERE idempleado= ?",[id],(error,result)=>{// y con esta logica pues seleccicono que id sera elminado 

        if(error){
            throw error;
        }
        else{
            res.redirect('/listarempleado');//aca redirecciona a la ventana listaempleados ya que en ahi hay un boton para eliminar  
                                            //ahora entiendes por que es un metodo agresivo 
                                            //si estan en apuros usenla o agregenle un messagebox ustedes entienden 
        }
    })

})

//Esto de aqui exporta a la funciones del archivo CRUD 
const crud=require('./controllers/crud');
router.post('/save',crud.save)//este el metodo post de insertar una ves que todo sea correcto se ejecutara la funcion Save que esta en crud 
                                // y se insertara el nuevo registro 

router.post('/update',crud.update) //Este es el metodo post de update es lo mismo quue el de insertar 
        
//Listar Productos

router.get('/listarproducto',(req,res)=>{

    cnn.query('select * from producto',(error,result)=>{
        if(error){
            throw error;
        }
        else{
            res.render('listarproducto',{objproducto:result});
            // res.send(result);
        }
    });
})

router.get('/nuevoproducto',(req,res)=>{
                
    res.render('nuevoproducto'); //Aqui llamo a la otra ventana para registrar  al nuevo usuario
                                // su metodo post lo encontraran mas abajo no se preocupen 
            
})

router.get('/editarproducto/:idproducto',(req,res)=>{  //Este es el de editar, ustedes ya sabran lo que significa la query 
    
    const id = req.params.idproducto; //capturo el id para saber cual editar
    cnn.query('SELECT * FROM producto WHERE idproducto = ?',[id],(error,result)=>{

        if(error){
            throw error;
        }
        else{
            res.render('editarproducto',{objproducto:result[0]}); //una vez todo este correcto el metodo post se ejecutra y te redireccionrara a esta ventana 
        }
    })

})
router.get('/deleteproducto/:idproducto',(req,res)=>{ //Aqui esta no muestra ninguna ventana , esta es una query agresiva ya que borra la 
                                                // de la base de datos sin consultar usenla con precacuicon 
    const id = req.params.idproducto; //Aqui caputro el ID 
    cnn.query("DELETE FROM producto WHERE idproducto= ?",[id],(error,result)=>{// y con esta logica pues seleccicono que id sera elminado 

        if(error){
            throw error;
        }
        else{
            res.redirect('/listarproducto');//aca redirecciona a la ventana listaempleados ya que en ahi hay un boton para eliminar  
                                            //ahora entiendes por que es un metodo agresivo 
                                            //si estan en apuros usenla o agregenle un messagebox ustedes entienden 
        }
    })

})


router.post('/save2',crud.save2)
router.post('/update2',crud.update2)

module.exports=router; //importante este el encargado de redireccionar las rutas  