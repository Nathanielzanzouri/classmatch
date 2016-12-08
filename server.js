var express = require('express');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/students');

var Student = require("./StudentModel");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));

app.use('/node_modules', express.static('node_modules'));


app.post('/students', function (req, res) {
  var student = new Student(req.body);

  student.save(function (err, student) {
    res.send(student);
    console.log(student);
  });
});


app.get('/students',function (req,res) {
  Student.find({},function (error,students) {
    res.send(students);
  });


//search request
app.get('/Route/:aStrength',function(req,res) {


    Student.find({strength: req.params.aStrength},function(err, Thestudent){
<<<<<<< HEAD
=======
      res.send(Thestudent);
    });

    });

app.get('/Route2/:aWeakness',function(req,res) {


    Student.find({weakness: req.params.aWeakness},function(err, Thestudent){
>>>>>>> 831a83168d09a257ac72b7a1c39bc10fd25acdbb
      res.send(Thestudent);
    });

});

});


app.listen(8000);