const express = require('express');
const bodyPasser = require('body-parser');


const apiRouter = require('./routes/api');
const appRouter=require('./routes/app')

const app = express();

require('./db');

app.use(express.static('static'))
app.set('views', __dirname + '/templates');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');


app.use(bodyPasser.json());
app.use(bodyPasser.urlencoded({extended: true}));

app.use('/api', apiRouter);
app.use('/', appRouter);   
  

app.listen(3000,()=>{
        console.log('Server start');
    });