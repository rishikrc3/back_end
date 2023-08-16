const { log } = require("console");
const fs = require("fs");
const express = require("express");
const app = express();
const port = 3000;

function handleRequest(req, res) {
  res.send("Hello World!");
}
app.get("/", handleRequest);
function started() {
  console.log(`Example app listening on port ${port}`);
}
app.listen(port, started);

function callbackFn(err, data) {
  console.log(data);
}
fs.readFile("a.txt", "utf-8", callbackFn);
function calculateSum(counter) {
  var sum = 0;
  for (var i = 0; i < counter; i++) {
    sum += i;
  }
  return sum;
}

var calculatedSum = calculateSum(100);
console.log(calculatedSum);
