var express = require('express');
var router = express.Router();

const userModel = require("./users");


// router.use("/", function(req, res, next){
//   console.log("middle ware");
//   next();
// });

router.get("/", function(req, res){
  res.render("index.ejs");
});


router.get("/create", async function(req, res){
 const createduser = await userModel.create({
   username: "harsh",
    age: 25,
    name: "harsh"
  });

res.send(createduser);

});


module.exports = router;
