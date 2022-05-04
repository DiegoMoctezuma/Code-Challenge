const Reader = require("../../lib/utils/reader");

describe("Pruebas de Reader", () => {
    test("Json File", () => {
        const JsonFile = Reader.readJsonFile("./test/utils/test.json");

        expect(JsonFile[0]).toEqual({
            id: "6264d5d89f1df827eb84bb23",
            name: "Warren",
            email: "Todd@visualpartnership.xyz",
            credits: 508,
            enrollments: ["Visual Thinking Intermedio", "Visual Thinking Avanzado"],
            previousCourses: 1,
            haveCertification: true,
        });
    });
});
