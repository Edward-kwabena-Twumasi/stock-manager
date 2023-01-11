const express = require("express");

// apiRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests .
const apiRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// This api route fetches users for authentication.
apiRoutes.route("/").get(function (req, res) {
 
      res.send({hello:"im listening right here"});
   
});
// This api route fetches users for authentication.
apiRoutes.route("/auth/login").get(function (req, res) {
  let db_connect = dbo.getDb();
  db_connect
    .collection("users")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});
// This api route fetches users for authentication.
apiRoutes.route("/auth/register").get(function (req, res) {
  let db_connect = dbo.getDb();
  db_connect
    .collection("users")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This api route fetches data for the dashboard.
apiRoutes.route("/home/dashboard").get(function (req, res) {
  let db_connect = dbo.getDb();

  let dashboardData={"categories":[],"products":[],"invoices":[]}

  db_connect
    .collection("categories")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
     dashboardData["categories"]=result
    });
    db_connect
    .collection("products")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
     dashboardData["products"]=result
    });
    db_connect
    .collection("invoices")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
     dashboardData["invoices"]=result
    });
    res.json(dashboardData)
});
// This api route fetches the collection [categories|invoices|products].
apiRoutes.route("/home/:collection").get(function (req, res) {
  let collectionString=req.params.collection;
 
  let db_connect = dbo.getDb();
  db_connect
    .collection(collectionString)
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});


// This section will help you get a single document by id
apiRoutes.route("/:collection/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let collectionString=req.params.collection;
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection(collectionString)
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

// This section will help you create a new document in the specified collection.
apiRoutes.route("/home/:collection").post(function (req, res) {
  let db_connect = dbo.getDb();
  let collectionString=req.params.collection;

  const date=new Date();
  console.log(date)
  let data = req.body
  db_connect.collection(collectionString).insertOne(data, function (err, res) {
    if (err) throw err;
    res.json(res);
  });
});

// This section will help you update a document by id.
apiRoutes.route("/:collection/:id").put(function (req, res) {
  let db_connect = dbo.getDb();
  let collectionString=req.params.collection;
  let myquery = { _id: ObjectId( req.params.id )};
  const date=new Date();
  let newvalues = {
    $set: {
      title: req.body.title,
      content: req.body.content,
      created:req.body.created,
      updated:date.toUTCString()
    },
  };
  db_connect
    .collection(collectionString)
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("document updated succesfully");
      res.json(res);
    });
});


// This section will help you delete a document from collection
apiRoutes.route("/:collection/:id").delete((req, res) => {

  let db_connect = dbo.getDb();
  let collectionString=req.params.collection;
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection(collectionString).deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("document deleted succesfully");
    res.json(obj);
  });
});

module.exports = apiRoutes;
