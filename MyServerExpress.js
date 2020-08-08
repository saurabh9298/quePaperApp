const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const jwt=require('jsonwebtoken');
const secretKey='IMASAURABHSURYAWANSHI';

app.use(bodyParser.json());

app.use((req, resp, next)=>{
    resp.setHeader('Access-Control-Allow-Origin', '*');
    resp.setHeader('Access-Control-Allow-Methods', '*');
    resp.setHeader('Access-Control-Allow-Headers', '*');
    next();

});


app.use((req, resp, next) => {
    resp.setHeader('middleware', 'logincheck');

    if (req.url.startsWith('/uebank')) {
        // get the request header called 'Authorization'
        const auth = req.headers['authorization'];

        if (!auth) {
            resp.status(401);
            resp.json({ message: 'Authorization header is missing' });
            return;
        }

        const [bearer, token] = auth.split(' '); // sencond part of the entire authorization token (first one being the word 'Bearer')

        if (!token) {
            resp.status(401);
            resp.json({ message: 'Authorization token is missing' });
            return;
        }
        // validate the token for its integrety, if it is not tampered, then allow the user to go the actual handler
        try {
            jwt.verify(token, secretKey);
            next();
        }
        catch (err) {
            resp.status(401);
            resp.json({ message: 'Token is missing or invalid!', err });
        }
    }
    else {
        next();
    }

});


//REST endpoint to check the credentials
app.post('/login', require('./handlers/login'))

app.get('/quebank', require('./handlers/get-que-bank'));    //get question bank

app.get('/quebank/:bankclick', require('./handlers/get-resp-ques-of-queBank'));  //view questions of questions bank
app.get('/quebank/delete-bank/:bankclick', require('./handlers/delete-que-bank'));  //delete bank
app.get('/quebank/delete-question/:bankclick', require('./handlers/delete-question-from-question-bank'));  //delete question
app.post('/quebank/edit-bank-name/:bankclickk', require('./handlers/edit-que-bank-name'));  //edit question bank name
app.post('/quebank/edit-answer-key/:quesid', require('./handlers/edit-answer-key'));  //edit question answer key

app.post('/quebank/edit-question/:quesid', require('./handlers/edit-question'));  //edit question
app.post('/quebank/edit-choice1/:quesid', require('./handlers/edit-choice1'));  //edit choice1
app.post('/quebank/edit-choice2/:quesid', require('./handlers/edit-choice2'));  //edit choice2
app.post('/quebank/edit-choice3/:quesid', require('./handlers/edit-choice3'));  //edit choice3
app.post('/quebank/edit-choice4/:quesid', require('./handlers/edit-choice4'));  //edit choice4  

app.post('/quebank/add-new-question/bank', require('./handlers/add-new-question'));  //add question
app.post('/quebank/add-new-question-bank/ok', require('./handlers/add-new-question-bank')); //add question bank

app.get('/questionpaper', require('./handlers/view-question-paper'));    //get question paper list
app.post('/addnewquestionpaper', require('./handlers/add-new-question-paper'));    //add new question paper

app.get('/addnewquestionpaper/show-questions-to-create-question-paper', require('./handlers/show-all-questions-to-create-question-paper'));    //add questions to question paper interface
app.post('/addnewquestionpaper/questions-added/:questionpapername', require('./handlers/add-question-to-question-paper'));    //add questions to question paper interface
app.post('/addnewquestionpaper/delete-question-from-question-paper', require('./handlers/remove-question-from-question-paper'));    //delete question from question paper
app.get('/questionpaper/view-questions-in-a-particular-question-paper/:quespapername', require('./handlers/view-questions-in-a-particular-question-paper'));    //view-questions-in-a-particular-question-paper



// app.get('/add-question-bank', require('./handlers/add-new-question'));

// app.get('/quelisttt', require('./handlers/get-ques-after-click-resp-bank'));//now
// app.get('/quelist', require ('./handlers/get-que-list-choices-ans'));

port=3000;
app.listen(port, function(){
    console.log('server started on port 3000');
});
