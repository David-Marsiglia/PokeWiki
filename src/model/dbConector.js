import mysql from 'mysql';
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'bf78b7bqjhuvxantpb4r-mysql.services.clever-cloud.com',
    user: 'u9edbbscmqrd4psa',
    password: 'GIBeOwg36ngU8GghCkQH',
    database: 'bf78b7bqjhuvxantpb4r',
    port: '3306'
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