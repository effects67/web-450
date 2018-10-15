//add mongoose
var mongoose = require('mongoose');

var quizCiSchema = new mongoose.Schema({
    question: String,
    answers:[
        {answer1:String},
        {answer2:String},
        {answer3:String},
        {answer4:String},
    ]});

const quizCi = module.exports = mongoose.model('quizCi', quizCiSchema);

module.exports.getById = (id, callback) => {
    var query = {_id: id};
    quizCi.findById(query, callback);
}