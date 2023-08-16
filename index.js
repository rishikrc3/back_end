const { log } = require("console");
const fs = require("fs");
const express = require("express");
const app = express();
const port = 3000;
function calculateSum(counter) {
  var sum = 0;
  for (var i = 0; i <= counter; i++) {
    sum += i;
  }
  return sum;
}
function handleRequest(req, res) {
  var counter = req.query.counter;
  var calculatedSum = calculateSum(counter);
  var ans = "The sum is " + calculatedSum;
  res.send(ans);
}
app.get("/", handleRequest);
function started() {
  console.log(`Example app listening on port ${port}`);
}
app.listen(port, started);

function callbackFn(err, data) {
  console.log(data);
}
