const StudentController = require("../../lib/controllers/studentsController");

describe("Test de StudentController", () => {
    test("1. Estudiantes de Visual Partner-Ship", () => {
        const students = StudentController.getStudents();

        expect(students[0]).toEqual({
            id: "6264d5d89f1df827eb84bb23",
            name: "Warren",
            email: "Todd@visualpartnership.xyz",
            credits: 508,
            enrollments: ["Visual Thinking Intermedio", "Visual Thinking Avanzado"],
            previousCourses: 1,
            haveCertification: true,
        });
    });
    test("2. Estudiantes certificados", () => {
        const students = StudentController.getEmailsCertification();

        expect(students).toContain("Todd@visualpartnership.xyz");
    });
    test("3. Estudiantes con creditos mayores a 500", () => {
        const students = StudentController.getCredits();

        expect(students[8].credits).toBeGreaterThanOrEqual(500);
    });
});
