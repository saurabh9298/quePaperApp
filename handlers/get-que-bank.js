const mysql=require('mysql');
const mysqlCfg=require('./mysqlConfig');

module.exports = function(req, resp){
    const conn=mysql.createConnection(mysqlCfg);
    conn.query('SELECT * from quebank', function(err, rows){
        if (err) throw err;
        resp.send(rows);
    });
    conn.end();
};