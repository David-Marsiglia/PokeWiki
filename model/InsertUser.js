import { connection } from './dbConector.js';
import bcryptjs from 'bcryptjs'
export async function insertarDatos(datos, callback) {
    const email = datos.email;
    const pass = await bcryptjs.hash(datos.contraseña, 8);
    
    const result =  connection((err, connection) => {
      if (err) {
        console.error('No se pudo obtener una conexión:', err);
      } else {
        connection.query('INSERT INTO usuario_pokewiki SET ?', {email:email, contraseña:pass}, 
        function (err, result) {
            callback(err, result);
            connection.release(); 
        });
      }
    });
    return result;
  }
 