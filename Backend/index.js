const express = require("express");
const app = express();
const PORT = 3000;
console.log("hashim");
app.use(express.json());
const conectin=require("./model/db");



app.listen(PORT, () => {
  console.log("server is running", PORT);
  conectin
});



