const mysql=require('mysql');
const mysqlCfg=require('./mysqlConfig');

module.exports = function(req, resp){
    const conn=mysql.createConnection(mysqlCfg);
    conn.query('select question.questions, questionchoices.choice1, questionchoices.choice2, questionchoices.choice3, questionchoices.choice4, queanswer.answerkey from question join questionchoices on question.questionsid=questionchoices.questionsid join queanswer on  questionchoices.questionsid=queanswer.questionsid;', 
    function(err, rows){
        if (err) throw err;
        resp.send(rows);
    });
    conn.end();
};