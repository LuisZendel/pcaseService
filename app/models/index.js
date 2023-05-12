var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://robot:123@cluster0.xdlfxyy.mongodb.net/?retryWrites=true&w=majority";
console.log("Empezando")

MongoClient.connect(url, function(err, db) {
console.log("conection")
  if (err) throw err;
  var dbo = db.db("pcase");
  console.log(ejecutando, dbo)
  dbo.collection("products").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});