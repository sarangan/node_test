var mysql = require('mysql');

var con = mysql.createConnection({
  host: 'localhost',
  user: 'username',
  password: 'password'
});

con.connect(function(err){
  if(err) thrrow err;
  console.log('connected');


  con.query(sql, function(err, result){
    if(err) throw err;
    console.log("result " + result);
  });

});


var mongo = require('mongodb');

var MongoClient = mongo.MongoClient;
var url ="mongodb://localhost:27017/mydb";


MongoClient.connect(url, function(err, db){
  if(err) throw err;
  console.log('databse created')
  db.close();
});


var url ="mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db){
  if(err) throw err;

  var dbo = db.db("mydb");
  dbo.createCollection("customers", function(err, res){
    if(err) throw err;
    console.log("collection created!");
    db.close();
  });

});

MongoClient.connect(url, function(err, db){
  if(err) throw err;

  var dbo = db.db("mydb");
  var myobj = { name: "com", add: "higway", age: 12};
  dbo.collection("customers").insertOne(myobj, function(err, res){ //insertMany [{_id:}, {_id:}]
    db.close();
  });

});


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").findOne({}, function(err, result) { // find({})
    if (err) throw err;
    console.log(result.name);
    db.close();
  });
});

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").find({}, { _id: 0, name: 1, address: 1 }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});


var query = { address: "Park Lane 38" };
  dbo.collection("customers").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });


  { name: 1 } // ascending
  { name: -1 } // descending

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var mysort = { name: 1 };
    dbo.collection("customers").find().sort(mysort).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
});


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { address: 'Mountain 21' };
  dbo.collection("customers").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
});


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { address: /^O/ };
  dbo.collection("customers").deleteMany(myquery, function(err, obj) {
    if (err) throw err;
    console.log(obj.result.n + " document(s) deleted");
    db.close();
  });
});


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { address: "Valley 345" };
  var newvalues = { $set: {name: "Mickey", address: "Canyon 123" } };
  dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});


var myquery = { address: /^S/ };
  var newvalues = {$set: {name: "Minnie"} };
  dbo.collection("customers").updateMany(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log(res.result.nModified + " document(s) updated");
    db.close();
  });


  dbo.collection("customers").find().limit(5).toArray(function(err, result) {


    dbo.collection('orders').aggregate([
    { $lookup:
       {
         from: 'products',
         localField: 'product_id',
         foreignField: '_id',
         as: 'orderdetails'
       }
     }
    ]).toArray(function(err, res)
