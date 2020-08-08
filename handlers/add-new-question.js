const mysql=require('mysql');
const mysqlCfg=require('./mysqlConfig');

module.exports = function(req, resp){
    const conn=mysql.createConnection(mysqlCfg);
    conn.query('insert into question1 set ?', (req.body), (err)=>{
        if (err) throw err;
        resp.end();
    });
    // conn.end();
};
