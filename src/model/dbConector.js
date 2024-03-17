import mysql from 'mysql';
const connection = mysql.createConnection({
    host: 'bf78b7bqjhuvxantpb4r-mysql.services.clever-cloud.com',
    user: 'u9edbbscmqrd4psa',
    password: 'GIBeOwg36ngU8GghCkQH',
    database: 'bf78b7bqjhuvxantpb4r',
    port: '3306'
  });

  connection.connect((err) => {
    if (err) {
      console.error('Error al conectar a la base de datos:', err);
      return;
    }
    console.log('Conexión exitosa a la base de datos.');
  });
    
export {connection};