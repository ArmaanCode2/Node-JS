const express = require('express');
const path = require('path');
const app = express();
const port = 80;//serving static files
app.use('/static',express.static('static'));

//setting the template engine
app.set("view engine",'pug');

//setting view directory
app.set('views',path.join(__dirname,'views'));

//pug demo end point
app.get('/demo',(req,res)=>{
    res.statusCode = 200
    res.render('demo', { title: 'Hey armaan', message: 'Hello armaan there!' })
})
app.get('/',(req,res)=>{
    res.send('this is home ');
})

app.get('/about',(req,res)=>{
    res.statusCode = 404;
    res.send('this is about');
})

app.post('/about',(req,res)=>{
    res.send('this is post request about');
})

app.listen(port,()=>{
    console.log('server starting');
})