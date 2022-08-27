const express = require('express');
const path = require('path')
const app = express();
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/contactDance',{useNewUrlParser: true});
const port = 80;

//mongoose schema
const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String,
});

const contact = mongoose.model('contact', contactSchema);

app.use('/static',express.static('static'));//serving static files
app.use(express.urlencoded());

//PUG related
app.set("view engine",'pug');//setting the template engine
app.set('views',path.join(__dirname,'views'));//setting view directory

//endpoints
app.get('/',(req,res)=>{
    const params = {}
    res.status(200).render('home.pug',params);
});

app.get('/contact',(req,res)=>{
    const params = {}
    res.status(200).render('contact.pug',params);
});

app.post('/contact',(req,res)=>{
    var myData = new contact(req.body);
    myData.save().then(()=>{
        res.send("This Information has been dilivered to our Team");
    }).catch(()=>{
        res.status(400).send("Information Could not be dilivered Please Try Again");
    })

    // res.status(200).render('contact.pug');
});


//starting server
app.listen(port,()=>{
    console.log('server starting');
});