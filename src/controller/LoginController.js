import { consultarDatos } from '..LoginModel.js';
import bcryptjs from 'bcryptjs'
export async function login(req, res) {
    const datos = req.body;
    const pass = req.body.contraseña;
    const email = datos.email;
    const result = await consultarDatos(datos, async function(err, result){
        if(result == 0 || !(await bcryptjs.compare(pass, result[0].contraseña))){
            res.redirect("/login?success=false")     
        }else if(result == 0 || !(email == result[0].email)){
            res.redirect("/login?success=false")  
        }
        else{
            req.session.usuarioLogueado = true;
            res.redirect("/home?type=0&num=20") 
        }
    });  
  
  
}