const mysql=require('mysql');
const mysqlCfg=require('./mysqlConfig');

module.exports = function(req, resp){
    const conn=mysql.createConnection(mysqlCfg);
    conn.query(`insert into questionpaper set questionpapername='${req.body.questionpapername}'`, (err)=>{
        if (err) throw err;
        resp.end();
    });
};
