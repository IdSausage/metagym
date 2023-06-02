import mysql from 'mysql2';

const db = mysql.createConnection({
    host:"server2.bsthun.com",
    database: "lab_blank01_1f3dztq",
    password: "gLlbejIK8cS65Gio",
    user: "lab_1fidap",
    port: 6105,
});

export default db;