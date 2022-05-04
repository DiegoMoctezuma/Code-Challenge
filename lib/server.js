const StudentController = require("./controllers/studentsController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (require, response) => {
	response.send("Visual Thinking API");
});

app.listen(port, () => {
	console.log(`Visual Thinking API in localhost:${port}`);
});
