const mongoose = require('mongoose');
  
const employeeSchema = new mongoose.Schema({
    employeeId: String,
});



const Employee = module.exports = mongoose.model('Employee', employeeSchema);