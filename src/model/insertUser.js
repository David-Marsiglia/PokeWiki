import { connection } from './DbConector.js';
export async function insertarDatos(datos, callback) {
    const name = datos.nombre;
    const pass = datos.contraseña;
    const result = connection.query('INSERT INTO usuario_pokewiki SET ?', {nombre:name, contraseña:pass}, 
    function (err, result) {
        callback(err, result);
      });
    return result;
  }