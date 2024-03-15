import { consultarDatos } from '../model/LoginModel.js';
export async function login(req, res) {
    const datos = req.body;
    const pass = req.body.contraseña;
    const result = await consultarDatos(datos, function(err, result){
        if(result == 0 || !(pass == result[0].contraseña)){
            res.send("USUARIO Y/O CONTRASEÑA INCORRECTO!!")
        }else{
            req.session.usuarioLogueado = true;
            res.redirect("/home?type=0") 
        }
    });  
  
  
}