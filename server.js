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
    console.log(student)
  });
});


app.get('/students',function (req,res) {
  Student.find({},function (error,students) {
    res.send(students);
  });

// search bar 

// app.get('/dogRoute/:aName',function(req,res) {


//     Student.findOne({name: req.params.aName},function(err, Thestudent){
//       res.send(Thestudent);
//     });

// });

});


app.listen(8000);