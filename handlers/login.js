const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const mysqlCfg = require('./mysqlConfig');
const secretKey = 'IMASAURABHSURYAWANSHI';

module.exports = (req, resp) => {

    if ('email' in req.body & 'password' in req.body) {
        const sql = 'select * from users where email=? and password=?';
        const data = [req.body.email, req.body.password];
        const conn = mysql.createConnection(mysqlCfg);
        conn.query(sql, data, (err, results) => {
            if (err) throw err;

            const isValidUser = (results.length === 1);

            if (isValidUser) {

                let user=results[0];
                const payload = { 
                    sub: user.id, 
                    firstname: user.firstname, 
                    lastname: user.lastname, 
                    iat: Date.now() 
                };

                const token=jwt.sign(payload, secretKey);
                console.log(token)

                resp.json({ token });

            }
            else {
                resp.status(401);
                resp.send('Invalid username/password combination');
            }
            conn.end();
        });
    }
    else {
        resp.status(400);
        resp.send({ message: 'email and password are required in json format' })
    }


}