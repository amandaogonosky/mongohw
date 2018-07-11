var express = require("express");
var mongojs = require("mongojs");

// Initialize Express
var app = express();

// Set up a static folder (public) for our web app
app.use(express.static("public"));

// Save the URL of our database as well as the name of our collection
var databaseUrl = "globescraper";
var collections = ["news"];

// Use mongojs to hook the database to the db variable
var db = mongojs(databaseUrl, collections);

// This makes sure that any errors are logged if mongodb runs into an issue
db.on("error", function(error) {
  console.log("Database Error:", error);
});

// Routes
// 1. At the root path, send a simple hello 
app.get("/", function(req, res) {
  res.send("Yo Dawg");
});

// 2. At the "/all" path, display every entry in news collection
app.get("/all", function(req, res) {
  // Query: In our database, go to news collection, then "find" everything
  db.news.find({}, function(error, found) {
    // Log any errors if the server encounters one
    if (error) {
      console.log(error);
    }
    // Otherwise, send the result of this query to the browser
    else {
      res.json(found);
    }
  });
});

// 3. At the "/name" path, display every entry in the news collection sorted by name
app.get("/title", function(req, res) {
  // Query: In our database, go to the news collection, then "find" everything,
  // but this time, sort it by name (1 means ascending order)
  db.globescraper.find().sort({ title: 1 }, function(error, found) {
 
    if (error) {
      console.log(error);
    }
   
    else {
      res.json(found);
    }
  });
});

// 4. At the "/weight" path, display every story in the info collection, sorted by weight
app.get("/title", function(req, res) {
  // Query: In  database, go to the info collection, then "find" everything,
  // but this time, sort it by date (-1 means descending order)
  db.globescraper.find().sort({ title: -1 }, function(error, found) {
    // Log any errors if the server encounters one
    if (error) {
      console.log(error);
    }

    else {
      res.json(found);
    }
  });
});

app.listen(3000, function() {
  console.log("App here on 3000!");
});
