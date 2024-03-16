import { connection } from './DbConector.js';
export async function consultarDatos(datos, callback) {
    const name = datos.nombre;
    const pass = datos.contraseña;
    
    if(name && pass){
        const result = connection.query('SELECT * FROM usuario_pokewiki WHERE nombre = ?', 
        [name], 
        function (err, result) {callback(err, result);
        });
        return result;
    }
  }