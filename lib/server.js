const StudentController = require("./controllers/studentsController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (require, response) => {
    response.send("Visual Thinking API");
});

app.get("/v1/students", (require, response) => {
    const students = StudentController.getStudents();
    response.json(students);
});

app.get("/v1/students/emails", (require, response) => {
    const students = StudentController.getEmailsCertification();
    response.json(students);
});

app.get("/v1/students/credits", (require, response) => {
    const students = StudentController.getCredits();
    response.json(students);
});

app.listen(port, () => {
    console.log(`Visual Thinking API in localhost:${port}`);
});
