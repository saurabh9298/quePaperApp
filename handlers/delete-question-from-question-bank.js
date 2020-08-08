const mysql=require('mysql');
const mysqlCfg=require('./mysqlConfig');

module.exports=(req, resp)=>{
    const id=req.params.bankclick;
    const conn=mysql.createConnection(mysqlCfg);

    const sql='delete from question1 where questionsid=? ';
    conn.query(sql,id, (err, result)=>{
        if(err) throw err;
        resp.send(result);
        console.log(this.id)
    });
    conn.end();

};