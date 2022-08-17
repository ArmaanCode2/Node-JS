const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost/armaanKart',{useNewUrlParser: true,useUniFiedTopology:true});

var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
// db.once('open',function(){
//     //connected
//     console.log("connected to db");
// });

const kittySchema = new mongoose.Schema({
    name: String
});

kittySchema.methods.speak = function speak() {
    const greeting ="Meow name is " + this.name;
    // console.log(greeting);
  };
  

const Kitten = mongoose.model('armaanKitty', kittySchema);

const armaanKitty = new Kitten({ name: 'armaanKitty' });
// console.log(armaanKitty.name);
// armaanKitty.speak();

armaanKitty.save(function(err,armaanKitty){
    if(err) return console.err(err);
    // armaanKitty.speak();
})

Kitten.find({name:"armaanKitty"},function(err,armaanKitty){
    if(err) return console.err(err);
    console.log(armaanKitty);
})