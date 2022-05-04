const Reader = require("../../lib/utils/reader");
const EstudentsService = require("../../lib/services/studentsService");

describe("Pruebas de EstudentsService", () => {
	test("1. Filtro de estudiantes por certificación", () => {
		const students = Reader.readJsonFile("./test/services/test.json");
		const haveCertification = EstudentsService.getHaveCertification(students);

		expect(haveCertification).toContain("Todd@visualpartnership.xyz");
	});
});
