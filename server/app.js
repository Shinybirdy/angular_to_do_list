console.log("Hey - from app.js");
//server side
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.set("port",(process.env.PORT||8080));


//set static page
app.use(express.static('public'));

app.get('/*',function(req,res){
  console.log("at base url, so that's something...");

  var file= req.params[0]||"/views/index.html";
  res.sendFile(path.join(__dirname,"/public", file));
  //res.sendFile(path.resolve("views/index.html"));
});
// angular.module("ToDoListApp", [])
// .controller("MainCtrl", function($scope){
//   $scope.helloWorld = function(){
//     console.log("Hey");
//   };
// });
app.listen( app.get("port"), function(){
  console.log("Server is listening on port 8080, darling...");
});

// app.use('/', router);
module.exports=app;
