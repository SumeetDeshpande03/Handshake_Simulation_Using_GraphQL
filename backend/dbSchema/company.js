const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySchema = new Schema({
    name: {type: String},
    email: {type: String},
    password: {type: String},
    location: {type: String},
    description: {type: String}
},
{
    versionKey: false
});

module.exports = mongoose.model('company', companySchema);