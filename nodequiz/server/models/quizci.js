/add mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quizCiSchema = new Schema({
    question: String,
    answers:[
        {answer1:String},
        {answer2:String},
        {answer3:String},
        {answer4:String},
    ]}
   //fix this {collection:}
    );

const quiz = module.exports = mongoose.model('quiz', quizCiSchema);
// why is this greyed out???



