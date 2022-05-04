const Reader = require("../utils/reader");
const EstudentsService = require("../services/studentsService");

class StudentController {
    static getStudents() {
        return Reader.readJsonFile("data.json");
    }
    static getEmailsCertification() {
        const students = Reader.readJsonFile("data.json");
        return EstudentsService.getHaveCertification(students);
    }
    static getCredits() {
        const students = Reader.readJsonFile("data.json");
        return EstudentsService.getCredits(students);
    }
}

module.exports = StudentController;
