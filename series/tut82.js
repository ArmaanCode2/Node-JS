//searching for data in mongo db
// use armaanKart

//this will find give price 20,000
//{price:"20,000"} this is called filter object
db.items.find({price:"20,000"})

//gt is greater and e is equal
db.items.find({price:{$gte:"20,000"}}) 

//AND operator is done by a comma
db.items.find({price:{$gte:"20,000"},rating:{$gt:3.0}})

//lt for less than
db.items.find({price:{$lt:"20,000"},rating:{$gt:3.0}})

//or operator
db.items.find({$or:[{price:{$lt:"20,000"}},{rating:{$gt:3.0}}]})