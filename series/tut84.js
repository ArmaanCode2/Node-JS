//searching for data in mongo db
// use armaanKart

//anotherCollection is collection name 
db.anotherCollection.insertOne({hello:"ok"})

//updateOne document    finder         what to set
db.items.updateOne({name:'vivo2'},{$set:{price:'17,000'}})


//same syntax ad updateOne and this updates and all matched conditions
db.items.updateMany({name:'vivo2'},{$set:{price:'17,000',rating:1.5}})