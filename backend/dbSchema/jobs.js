const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    companyName: {type: String},
    jobTitle: {type: String},
    postingDate: {type: String},
    jobLocation: {type: String},
    applicationDeadline: {type: String},
    salary: {type: String},
    jobDescription: {type: String},
    jobCategory: {type: String},
    applicants:[]
},
{
    versionKey: false
});

module.exports = mongoose.model('job', jobSchema);