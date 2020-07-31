const graphql = require('graphql');
const Student = require("../dbSchema/student");
const Company = require("../dbSchema/company");
const Job = require("../dbSchema/jobs");
const {studentLogin, companyLogin} = require('../mutations/login');
const {studentSignup, companySignup} = require('../mutations/signup');
const {updateStudentProfile, updateCompanyProfile} = require('../mutations/profile');
const {postJob, applyJob} = require('../mutations/jobs')

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull
} = graphql;

const ApplicationsType = new GraphQLObjectType({
    name: 'Application',
    fields: () => ({
        _id: { type: GraphQLID },
        status: { type : GraphQLString },
        companyName: { type: GraphQLString },
        jobTitle: { type: GraphQLString },
        jobLocation: { type: GraphQLString },
        postingDate: { type: GraphQLString },
        applicationDeadline: { type: GraphQLString },
        salary : { type: GraphQLString },
        jobDescription: { type: GraphQLString },
        jobCategory: { type: GraphQLString }
    })
});

const StudentType = new GraphQLObjectType({
    name: 'Student',
    fields: () => ({
        _id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        collegeName: { type: GraphQLString },
        applications: {type: GraphQLList(ApplicationsType)}
    })
});

const CompanyType = new GraphQLObjectType({
    name: 'Company',
    fields: () => ({
        _id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        location: { type: GraphQLString },
        description: { type: GraphQLString }
    })
});

const JobType = new GraphQLObjectType({
    name: 'Job',
    fields: () => ({
        _id: { type: GraphQLID },
        companyName: { type: GraphQLString },
        jobTitle: { type: GraphQLString },
        jobLocation: { type: GraphQLString },
        postingDate: { type: GraphQLString },
        applicationDeadline: { type: GraphQLString },
        salary : { type: GraphQLString },
        jobDescription: { type: GraphQLString },
        jobCategory: { type: GraphQLString },
        applicants: { type: GraphQLList(StudentType) }
    })
});

const StatusType = new GraphQLObjectType({
    name: 'Status',
    fields: () => ({
        status: { type: GraphQLString },
        message: { type: GraphQLString },
        student: {type: StudentType},
        company: {type: CompanyType},
        job: {type: JobType}
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        student: {
            type: StudentType,
            args: { student_id: { type: GraphQLString } },
            async resolve(parent, args) {
                let student = await Student.findById(args.student_id);
                if (student) {
                    return student;
                }
            }
        },
        students: {
            type: new GraphQLList(StudentType),
            async resolve(parent, args){
                let students = await Student.find();
                if(students){
                    return students;
                } 
            }
        },
        company: {
            type: CompanyType,
            args: { company_id: { type: GraphQLString } },
            async resolve(parent, args) {
                let company = await Company.findById(args.company_id);
                if (company) {
                    return company;
                }
            }
        },
        jobs: {
            type: new GraphQLList(JobType),
            async resolve(parent, args){
                let jobs = await Job.find();
                if(jobs){
                    return jobs;
                } 
            }
        }        
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        studentSignup: {
            type: StatusType,
            args: {
                name: { type: GraphQLString },
                email: { type: GraphQLString },
                password: { type: GraphQLString },
                collegeName: { type: GraphQLString }
            },
            async resolve(parent, args) {
                return studentSignup(args);
            }
        },
        studentLogin: {
            type: StatusType, 
            args: {
                email: { type: GraphQLString },
                password: { type: GraphQLString },
            },
            resolve(parent, args) {
                return studentLogin(args);
            }
        },
        companySignup: {
            type: StatusType,
            args: {
                name: { type: GraphQLString },
                email: { type: GraphQLString },
                password: { type: GraphQLString },
                location: { type: GraphQLString }
            },
            async resolve(parent, args) {
                return companySignup(args);
            }
        },
        companyLogin: {
            type: StatusType, 
            args: {
                email: { type: GraphQLString },
                password: { type: GraphQLString },
            },
            resolve(parent, args) {
                return companyLogin(args);
            }
        },
        updateStudentProfile: {
            type: StatusType,
            args: {
                _id: { type: GraphQLID},
                name: { type: GraphQLString },
                email: { type: GraphQLString },
                collegeName: { type: GraphQLString },
                careerObjective: { type: GraphQLString },
                dateOfBirth: { type: GraphQLString },
                city: { type: GraphQLString },
                state: { type: GraphQLString },
                country: { type: GraphQLString },
                collegeLocation: { type: GraphQLString },
                degree: { type: GraphQLString },
                major: { type: GraphQLString },
                yearOfPassing: { type: GraphQLString },
                cgpa: { type: GraphQLString },
                companyName: { type: GraphQLString },
                companyLocation: { type: GraphQLString },
                jobTitle: { type: GraphQLString },
                startDate: { type: GraphQLString },
                endDate: { type: GraphQLString },
                workDescription: { type: GraphQLString }
            },
            resolve(parent, args) {
                return updateStudentProfile(args);
            }
        },
        updateCompanyProfile: {
            type: StatusType,
            args: {
                _id: { type: GraphQLID},
                name: {type: GraphQLString },
                location: { type: GraphQLString },
                description: { type: GraphQLString }
            },
            resolve(parent, args) {
                return updateCompanyProfile(args);
            }
        },
        postJob: {
            type: StatusType,
            args: {
                companyName: { type: GraphQLString },
                jobTitle: { type: GraphQLString },
                postingDate: { type: GraphQLString },
                jobLocation: { type: GraphQLString },
                applicationDeadline: { type: GraphQLString },
                salary: { type: GraphQLString },
                jobDescription: { type: GraphQLString },
                jobCategory: { type: GraphQLString }
            },
            resolve(parent,args){
                return postJob(args);
            }
        },
        applyJob: {
            type: StatusType,
            args: {
                jobId: { type: GraphQLString },
                studentId: { type: GraphQLString }
            },
            resolve(parent,args){
                return applyJob(args);
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});