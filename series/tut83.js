db.items.find({price:'17000'})

//deleting items in mongoDB

//deleteOne will delete first enrty matching the condition
db.items.deleteOne({price:'17,000'})

//deleteMany will delete ALL enrties matching the condition
db.items.deleteMany({price:'17,000'})