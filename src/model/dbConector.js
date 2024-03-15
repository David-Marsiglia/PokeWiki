import mysql from 'mysql';
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'david',
    password: '123456',
    database: 'pokewiki'
  });

  connection.connect((err) => {
    if (err) {
      console.error('Error al conectar a la base de datos:', err);
      return;
    }
    console.log('Conexión exitosa a la base de datos.');
  });
    
export {connection};