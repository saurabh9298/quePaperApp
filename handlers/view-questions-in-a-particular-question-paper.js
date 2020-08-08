const mysql=require('mysql');
const mysqlCfg=require('./mysqlConfig');

module.exports=(req, resp)=>{
    const id=req.params.quespapername;
    const conn=mysql.createConnection(mysqlCfg);
    // console.log('id',id);

    const sql='select * from questionpaperques1 where questionpapername=?';
    conn.query(sql,id, (err, result)=>{
        if(err) throw err;
        resp.send(result);
    });
    conn.end();

};