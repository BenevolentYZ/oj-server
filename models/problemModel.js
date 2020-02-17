const mongoose = require('mongoose');
const ProblemScheme = mongoose.Schema({
    id: Number,
    name: String,
    desc: String,
    difficulty: String
});

const ProblemModel = mongoose.model('ProblemModel', ProblemScheme);

module.exports = ProblemModel;