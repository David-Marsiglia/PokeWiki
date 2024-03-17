import { connection } from './DbConector.js';
export async function consultarDatos(datos, callback) {
    const email = datos.email;
    const pass = datos.contraseña;
    
    if(email && pass){
        const result = connection.query('SELECT * FROM usuario_pokewiki WHERE email = ?', 
        [email], 
        function (err, result) {callback(err, result);
        });
        return result;
    }
  }