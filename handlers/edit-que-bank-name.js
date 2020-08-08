const mysql = require('mysql');
const mysqlCfg = require('./mysqlConfig');

module.exports = function (req, resp) {
    // console.log('Req Body',req.body)
    const id = req.params.bankclickk;
    const conn = mysql.createConnection(mysqlCfg);
    conn.query(`update quebank set quebankname='${req.body.quebankname}' where quebanknameid=${id}`, (err) => {
    // conn.query('select * from quebank', (err, res) => {
        if (err) throw err;
        // console.log(res)
        // console.log(req.body)
        // console.log(id)
        // resp.end();
    });
    // conn.end();
};