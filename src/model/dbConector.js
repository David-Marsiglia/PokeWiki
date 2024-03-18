import mysql from 'mysql';

//La información de la base de datos no puede ser pública. Se utilizo el servicio Clever Cloud
const pool = mysql.createPool({
    connectionLimit: 10,
    host: '........',
    user: '.....',
    password: '.....',
    database: '.....',
    port: '....'
  });

  function connection(callback) {
    pool.getConnection((err, connection) => {
      if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return callback(err);
      }
      console.log('Conexión exitosa a la base de datos.');
      callback(null, connection);
    });
  }
    
export {connection};