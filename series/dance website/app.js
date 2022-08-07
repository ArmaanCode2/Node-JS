const express = require('express');
const path = require('path')
const app = express();
const port = 80;

app.use('/static',express.static('static'));//serving static files
app.use(express.urlencoded());

//PUG related
app.set("view engine",'pug');//setting the template engine
app.set('views',path.join(__dirname,'views'));//setting view directory

//endpoints
app.get('/',(req,res)=>{
    const params = {}
    res.status(200).render('index.pug',params);
});


//starting server
app.listen(port,()=>{
    console.log('server starting');
});