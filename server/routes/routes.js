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
  db_connect
    .collection("dashboard")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});
// This api route fetches the categories.
apiRoutes.route("/home/categories").get(function (req, res) {
  let db_connect = dbo.getDb();
  db_connect
    .collection("categories")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This api route fetches the products.
apiRoutes.route("/home/products").get(function (req, res) {
  let db_connect = dbo.getDb();
  db_connect
    .collection("products")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This api route fetches the invoices.
apiRoutes.route("/home/invoices").get(function (req, res) {
  let db_connect = dbo.getDb();
  db_connect
    .collection("invoices")
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

// This section will help you create a new api.
apiRoutes.route("/:collection/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let collectionString=req.params.collection;

  const date=new Date();
  console.log(date)
  let myobj = {
    title: req.body.title,
    content: req.body.content,
    created:date.toUTCString(),
    updated:date.toUTCString()
  };
  db_connect.collection(collectionString).insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a api by id.
apiRoutes.route("/:collection/:id").put(function (req, response) {
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
      response.json(res);
    });
});


// This section will help you delete a document from collection
apiRoutes.route("/:collection/:id").delete((req, response) => {

  let db_connect = dbo.getDb();
  let collectionString=req.params.collection;
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection(collectionString).deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("document deleted succesfully");
    response.json(obj);
  });
});

module.exports = apiRoutes;
