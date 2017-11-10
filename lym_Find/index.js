let mongo = require('mongodb').MongoClient
let age = process.argv[2]
let url = 'mongodb://localhost:27017/learnyoumongo'
mongo.connect(url, function(err, db) {
  if (err) throw err
  let parrots = db.collection('parrots')
  parrots.find({
    age: {
      $gt: +age
    }
  }).toArray(function(err, docs) {
    if (err) throw err
    console.log(docs)
    db.close()
  })
})