const mysql = require('mysql');
const mysqlCfg = require('./mysqlConfig');

module.exports = function (req, resp) {
    const id = req.params.quesid;
    const conn = mysql.createConnection(mysqlCfg);
    conn.query(`update question1 set choice4='${req.body.choice4}' where questionsid=${id}`, (err) => {
        if (err) throw err;
    });
};