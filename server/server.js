var http = require("http");
var express = require("express");
var app = express();
var mysql = require("mysql");
var bodyParser = require("body-parser");

var connection = mysql.createConnection({
  host: "myfirstmysql.ctxnxmmbmx7d.us-east-2.rds.amazonaws.com",
  user: "bharthish",
  password: "password",
  database: "mydb"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("You are now connected with mysql database...");
});

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true
  })
);

var server = app.listen(3000, "127.0.0.1", function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});

//rest api to get all customers
app.get("/candidate", (req, res) => {
  let sql = "select * from table_candidate";
  let query = connection.query(sql, (error, results) => {
    if (error) throw error;
    res.end(JSON.stringify({ status: 200, error: null, response: results }));
  });
});

//show single candidate
app.get("/candidate/:id", (req, res) => {
  let sql = "SELECT * FROM table_candidate WHERE Id=" + req.params.id;
  let query = connection.query(sql, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
});

//rest api to create a new customer record into mysql database
app.post("/candidate", (req, res) => {
  console.log("Inside post");
  let data = {
    Name: req.body.Name,
    Mobile: req.body.Mobile,
    Email: req.body.Email,
    Dob: req.body.Dob,
    Job_experience: req.body.Job_experience,
    Previous_company: req.body.Previous_company
  };
  let sql = "INSERT INTO table_candidate SET ?";
  let query = connection.query(sql, data, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
});

//update product
app.put("/candidate/:id", (req, res) => {
  let sql =
    "UPDATE table_candidate SET Name='" +
    req.body.Name +
    "', Mobile='" +
    req.body.Mobile +
    "', City='" +
    req.body.City +
    "' WHERE Id=" +
    req.params.id;
  let query = connection.query(sql, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
});

//Delete product
app.delete("/candidate/:id", (req, res) => {
  let sql = "DELETE FROM table_candidate WHERE Id=" + req.params.id + "";
  let query = connection.query(sql, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
});
