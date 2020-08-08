const mysql=require('mysql');
const mysqlCfg=require('./mysqlConfig');

module.exports = function(req, resp){
    const conn=mysql.createConnection(mysqlCfg);
    conn.query('select question1.questionsid, quebank.quebankname, question1.questions,	question1.choice1, question1.choice2, question1.choice3, question1.choice4, question1.answerkey from question1 join quebank where question1.quebanknameid=quebank.quebanknameid;', function(err, rows){
        if (err) throw err;
        resp.send(rows);
    });
    conn.end();
};