var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var expressSession = require('express-session');

var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_CHARCOAL_URI ||'mongodb://localhost/rereddit-final');

var Student = require("./StudentModel");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(expressSession({secret: '3f0efe0fcde86a504c3f0203813fcc9a'}));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static('public'));

app.use('/node_modules', express.static('node_modules'));


app.post('/students', function (req, res) {
  var student = new Student(req.body);

  student.save(function (err, student) {
    res.send(student);
    console.log(student)
  });
});


app.get('/students',function (req,res) {
  Student.find({},function (error,students) {
    res.send(students);
  });

app.get('/Route/:aStrength',function(req,res) {


    Student.find({strength: req.params.aStrength},function(err, Thestudent){
      res.send(Thestudent);
    });

    });

app.get('/Route2/:aWeakness',function(req,res) {


    Student.find({weakness: req.params.aWeakness},function(err, Thestudent){
      res.send(Thestudent);
    });

});

});


app.listen(process.env.PORT || '4000');