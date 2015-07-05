var express = require("express");
var app = express();

app.use(express.static(__dirname+'/public'));

var router = express.Router();

router.use(function(req,res,next){
  console.log(req.method,req.url);
  next();
});

router.get('/', function(req, res){
  res.sendFile("home.html",{root: __dirname+"/public"});
});

router.get('/index.html', function(req,res){
  res.redirect(301,'/');
});

router.get('/projects', function(req, res){
  res.sendFile("project.html",{root: __dirname+"/public"});
});

router.get('/projects.html', function(req,res){
  res.redirect(301,'/projects');
});

router.get('/randomcolor',function(req, res){
  res.sendFile("randomColor.html",{root: __dirname+"/public"});
});

router.get('/randomColor.html', function(req,res){
  res.redirect(301,'/randomcolor');
});

var server = app.listen(3000, function(){
  console.log("Listening from local host");
});

app.use('/',router);

app.use(function(req,res){
  res.status(404).send("WHY YOU COME HERE");
});
