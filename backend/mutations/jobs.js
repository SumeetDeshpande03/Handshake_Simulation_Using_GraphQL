const Job = require("../dbSchema/jobs");
const Student = require("../dbSchema/student")

const postJob = async (args) => {
    let newJob = new Job({
        companyName: args.companyName,
        jobTitle: args.jobTitle,
        postingDate: args.postingDate,
        jobLocation: args.jobLocation,
        applicationDeadline: args.applicationDeadline,
        salary: args.salary,
        jobDescription: args.jobDescription,
        jobCategory: args.jobCategory
    });
    let savedJob = await newJob.save();
    if (savedJob) {
        return { status: 200, message: "Job Posted Successfully" , job: savedJob};
    }
    else {
        return { status: 500, message: "Internal Server Error" };
    }
};

const applyJob = async (args) => {
    const jobId = args.jobId
    const studentId = args.studentId
    try{
        const jobPost = await Job.findById(jobId)
        if(!jobPost){
            return { status: 400, message: "Job Post Not found" };
        } else{
            const student = await Student.findOne({ _id: studentId });
            if(!student){
                return { status: 400, message: "Student Not found" };
            } else {
                const {_id, name, collegeName} = student
                const applicantId = _id
                jobPost.applicants.push({applicantId, name, collegeName})
                let updatedJob = await jobPost.save()
                const {companyName, jobTitle, jobLocation, salary, jobDescription, jobCategory, postingDate, applicationDeadline} = updatedJob
                const status = 'Pending'
                student.applications.push({status, companyName, jobTitle, jobLocation, salary, jobDescription, jobCategory, postingDate, applicationDeadline})
                let updatedStudent = await student.save()
                return { status: 200, message: "Applied to Job Successfully", job: updatedJob, student: updatedStudent}
            }
        }
    } catch(error){
        console.log(error)
    }
};

exports.postJob = postJob;
exports.applyJob = applyJob;
