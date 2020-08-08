const mysql=require('mysql');
const mysqlCfg=require('./mysqlConfig');

module.exports = function(req, resp){
    const conn=mysql.createConnection(mysqlCfg);
    const id = req.params.questionpapername;
    // console.log(id);
    // console.log(req.body);
    conn.query(`insert into questionpaperques1 set questionsid=${req.body.questionsid}, q1='${req.body.questions}', c1='${req.body.choice1}', c2='${req.body.choice2}', c3='${req.body.choice3}', c4='${req.body.choice4}', ak='${req.body.answerkey}', questionpapername='${id}'`, (err)=>{
        if (err) throw err;
        resp.end();
    });
};
