const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: {type: String},
    email: {type: String},
    password: {type: String},
    collegeName: {type: String},
    careerObjective: {type: String},
    dateOfBirth: {type: String},
    city: {type: String},
    state: {type: String},
    country: {type: String},
    collegeLocation: {type: String},
    degree: {type: String},
    major: {type: String},
    yearOfPassing: {type: String},
    cgpa: {type: String},
    companyName: {type: String},
    companyLocation: {type: String},
    jobTitle: {type: String},
    startDate: {type: String},
    endDate: {type: String},
    workDescription: {type: String},
    applications : []
},
{
    versionKey: false
});

module.exports = mongoose.model('student', studentSchema);