const { log } = require("console");
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

function middleware1(req, res, next) {
  console.log("From inside the middleware " + req.headers.counter);
  //console.log("Error from inside the middleware");
  next();
}

//app.use(middleware1);

app.use(bodyParser.json());
function calculateSum(counter) {
  var sum = 0;
  for (var i = 0; i <= counter; i++) {
    sum += i;
  }
  return sum;
}
function handleRequest(req, res) {
  var counter = req.body.counter;
  var calculatedSum = calculateSum(counter);
  var answerObject = {
    sum: calculatedSum,
  };

  res.status(200).send(answerObject);
}
function handleSecondRequest(req, res) {
  console.log("Hello World");
}
app.post("/handleSum", handleRequest);

function started() {
  console.log(`Example app listening on port ${port}`);
}
app.listen(port, started);

function callbackFn(err, data) {
  console.log(data);
}
