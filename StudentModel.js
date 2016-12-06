var mongoose = require('mongoose');

var StudentSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  picture: String,
  strength: String,
  weakness: String
});

var Student = mongoose.model('Student', StudentSchema);

module.exports = Student;