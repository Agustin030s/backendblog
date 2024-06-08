import mariadb from "mariadb";

const pool = mariadb.createPool({
    host: process.env.DB_HOST           ||'localhost',
    port: process.env.DB_PORT           || 3306, 
    user: process.env.DB_USER           ||'root', 
    password: process.env.DB_PASSWORD   ||'root',
    database: process.env.DB_DATABASE   ||'virtualizaciondb',
    connectionLimit: 5,
});

export default pool;