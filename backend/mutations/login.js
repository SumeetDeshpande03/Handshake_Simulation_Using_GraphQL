const Student = require("../dbSchema/student");
const Company = require("../dbSchema/company");

const studentLogin = async (args) => {
    let student = await Student.findOne({ email: args.email, password: args.password });
    if (!student) {
        return { status: 401, message: "Invalid Credentials, Please try again" };
    }else{
        return { status: 200, message: "You have successfully logged in" , student: student};
    }
}

const companyLogin = async (args) => {
    let company = await Company.findOne({ email: args.email, password: args.password });
    if (!company) {
        return { status: 401, message: "Invalid Credentials, Please try again" };
    }else{
        return { status: 200, message: "You have successfully logged in" , company: company};
    }
}

exports.studentLogin = studentLogin;
exports.companyLogin = companyLogin;