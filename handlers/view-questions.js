const mysql=require('mysql');
const mysqlCfg=require('./mysqlConfig');

module.exports=(req, resp)=>{
    const id=req.params.bankclick;
    const conn=mysql.createConnection(mysqlCfg);
    // console.log('id',id);

    const sql='select * from question1 join quebank on question1.quebanknameid=quebank.quebanknameid where quebank.quebankname=?';
    conn.query(sql,id, (err, result)=>{
        if(err) throw err;
        resp.send(result);
    });
    conn.end();

};