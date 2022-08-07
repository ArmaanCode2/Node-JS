const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 80;

//EXPRESS related 
app.use('/static',express.static('static'));//serving static files
app.use(express.urlencoded());
//PUG related
app.set("view engine",'pug');//setting the template engine
app.set('views',path.join(__dirname,'views'));//setting view directory

//endpoints
app.get('/',(req,res)=>{
    const con = "this is my content";
    const params = {'title': 'i love pubg','content':con}
    res.status(200).render('index.pug',params);
});

app.post('/',(req,res)=>{
    let name = req.body.name;
    age = req.body.age;
    gender = req.body.gender;
    address = req.body.address;
    more = req.body.more;

    //storing data and creating a file
    let outPutString = `The name is ${name},${age},${gender},${address},${more}`;
    fs.writeFileSync('output.txt',outPutString);

    const params = {'message': 'form submitted successfully'}
    res.status(200).render('index.pug',params);
})


//starting server
app.listen(port,()=>{
    console.log('server starting');
});