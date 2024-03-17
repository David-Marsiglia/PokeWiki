import { connection } from './DbConector.js';
import bcryptjs from 'bcryptjs'
export async function insertarDatos(datos, callback) {
    const email = datos.email;
    const pass = await bcryptjs.hash(datos.contraseña, 8);
    
    const result = connection.query('INSERT INTO usuario_pokewiki SET ?', {email:email, contraseña:pass}, 
    function (err, result) {
        callback(err, result);
      });
    return result;
  }