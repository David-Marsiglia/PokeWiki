import { consultarDatos } from '../model/LoginModel.js';
export async function login(req, res) {
    const datos = req.body;
    const pass = req.body.contraseña;
    const name = datos.nombre;
    const result = await consultarDatos(datos, function(err, result){
        if(result == 0 || !(pass == result[0].contraseña)){
            res.redirect("/login?success=false")     
        }else if(result == 0 || !(name == result[0].nombre)){
            res.redirect("/login?success=false")  
        }
        else{
            req.session.usuarioLogueado = true;
            res.redirect("/home?type=0") 
        }
    });  
  
  
}