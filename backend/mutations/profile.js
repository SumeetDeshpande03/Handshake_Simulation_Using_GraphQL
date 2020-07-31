const Student = require("../dbSchema/student");
const Company = require("../dbSchema/company");

const updateStudentProfile = async (args) => {

    let student = await Student.findOne({ _id: args._id });
    if (student) {
        student.name = args.name;
        student.collegeName = args.collegeName;
        student.careerObjective = args.careerObjective;
        student.dateOfBirth = args.dateOfBirth;
        student.city = args.city;
        student.state = args.state;
        student.country = args.country;
        student.collegeLocation = args.collegeLocation;
        student.degree = args.degree;
        student.major = args.major;
        student.yearOfPassing = args.yearOfPassing;
        student.cgpa = args.cgpa;
        student.companyName = args.companyName;
        student.companyLocation = args.companyLocation;
        student.jobTitle = args.jobTitle;
        student.startDate = args.startDate;
        student.endDate = args.endDate;
        student.workDescription = args.workDescription;
        let savedStudent = await student.save();
        if (savedStudent) {
            return { status: 200, message: "Student Profile Updated" , student: savedStudent};
        }
        else {
            return { status: 500, message: "Error Occured" };
        }
    }
    else {
        return { status: 500, message: "Error Occured" };
    }
};

const updateCompanyProfile = async (args) => {

    let company = await Company.findOne({_id: args._id});
    if (company) {
        company.name = args.name
        company.location = args.location;
        company.description = args.description;
        let savedCompany = await company.save();
        if (savedCompany) {
            return { status: 200, message: "Company Profile Updated", company: savedCompany };
        }
        else {
            return { status: 500, message: "Error Occured" };
        }
    } else {
        return { status: 500, message: "Error Occured" };
    }
};

exports.updateStudentProfile = updateStudentProfile;
exports.updateCompanyProfile = updateCompanyProfile;