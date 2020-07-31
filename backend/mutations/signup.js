const Student = require("../dbSchema/student");
const Company = require("../dbSchema/company");

const studentSignup = async (args) => {
    let newStudent = new Student({
        name: args.name,
        email: args.email,
        password: args.password,
        collegeName: args.collegeName
    });
    let student = await Student.find({ email: args.email });
    if (student.length) {
        return { status: 400, message: "Student with this Email Id already exists" };
    }
    let savedStudent = await newStudent.save();
    if (savedStudent) {
        return { status: 200, message: "You have successfully signed up" , student: savedStudent};
    }
    else {
        return { status: 500, message: "Internal Server Error" };
    }
};

const companySignup = async (args) => {
    let newCompany = new Company({
        name: args.name,
        email: args.email,
        password: args.password,
        location: args.location
    });
    let company = await Company.find({ email: args.email });
    if (company.length) {
        return { status: 400, message: "Company with this Email Id already exists" };
    }
    let savedCompany = await newCompany.save();
    if (savedCompany) {
        return { status: 200, message: "You have successfully signed up" , company: savedCompany};
    }
    else {
        return { status: 500, message: "Internal Server Error" };
    }
};

exports.studentSignup = studentSignup;
exports.companySignup = companySignup;
