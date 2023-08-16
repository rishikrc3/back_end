const { log } = require("console");
const fs = require("fs");
const express = require("express");
const app = express();
const port = 3000;

function middleware1(req, res, next) {
  console.log("From inside the middleware " + req.headers.counter);
  console.log("Error from inside the middleware");
  next();
}

app.use(middleware1);
function calculateSum(counter) {
  var sum = 0;
  for (var i = 0; i <= counter; i++) {
    sum += i;
  }
  return sum;
}
function handleRequest(req, res) {
  console.log(req.headers);
  var counter = req.headers.counter;
  var calculatedSum = calculateSum(counter);
  var ans = "The sum is " + calculatedSum;
  res.send(ans);
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
