var mysql = require('mysql')

//buat koneksi database
const conn = mysql.createConnection({
    host:'localhost',
    user:'nawawi',
    password:'nawawi',
    database:'dbrestapi'
});

conn.connect((err)=>{
    if(err) throw err;
    console.log('Mysql terkoneksi');
}(

module.exports = conn;
    