const express = require("express");
const router = express.Router();
const path = require("path");

router.use("/api/films", require("./films"));

router.get("/", function(req, res){
  res.sendFile(path.join(__dirname +
  "/../client/build/index.html"));
});

router.get("/about", function(req, res){
  res.json({data: "All about us!"});
});

module.exports = router;
