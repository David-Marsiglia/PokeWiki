import mysql from 'mysql';
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'process.env.DB_HOST',
    user: 'process.env.DB_USER',
    password: 'process.env.DB_PASSWORD',
    database: 'process.env.DB_NAME',
    port: 'process.env.DB_PORT'
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
