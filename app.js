var express = require("express");
var app = express();

app.use(express.static(__dirname+'/public'));

var router = express.Router();

router.use(function(req,res,next){
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

router.get('/intpres',function(req,res){
  var presentation = __dirname+'/Intern_Presentation_Jacob_JS_2015-8-10.ppt';
  res.download(presentation,'JacobStovallInternPres.ppt');
});

router.get('/filenotfound', function(req, res){
  res.status(404).sendFile("FileNotFound.html", {root: __dirname+"/public"});
});

router.get('*',function(req,res){
  res.redirect(301,'/filenotfound');
});

app.use('/',router);

var server = app.listen(3000, function(){
  console.log("Listening from local host");
});
