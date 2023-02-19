import mysql from 'promise-mysql';

import data from './data';

const pool = mysql.createPool(data.database);

pool.getConnection()
.then((connection: any) => {
    pool.releaseConnection(connection);
    console.log('Conexion Exitosa');
});

export default pool;