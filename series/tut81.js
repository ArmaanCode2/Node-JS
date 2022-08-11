//how to insert data in mongo db
use armaanKart

db.items.insertOne({
    name:"vivo",
    price:"17,000",
    rating:3.9,
    qty:100,
    sold:10
})

//multiple documents
db.items.insertMany([{
    name:"vivo",
    price:"17,000",
    rating:3.9,
    qty:100,
    sold:10 
},{
    name:"vivo2",
    price:"20,000",
    rating:2.5,
    qty:3300,
    sold:220 
},{
    name:"Realme Super",
    price:"70,000",
    rating:4.3,
    qty:1300,
    sold:50 
}])
