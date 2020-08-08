const mysql=require('mysql');
const mysqlCfg=require('./mysqlConfig');

module.exports = function(req, resp){
    const conn=mysql.createConnection(mysqlCfg);
    // console.log(id);
    console.log(req.body);
    conn.query(`delete from questionpaperques1 where questionsid=${req.body.questionsid}`, (err)=>{
        if (err) throw err;
        resp.end();
    });
};
