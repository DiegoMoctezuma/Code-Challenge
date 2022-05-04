class EstudentsService {
    static getHaveCertification(students) {
        const haveCertication = students.filter(
            (student) => student.haveCertification === true
        );

        return haveCertication.map((student) => student.email);
    }
    static getCredits(students) {
        const haveCredits = students.filter((student) => student.credits >= 500);
        return haveCredits;
    }
}

module.exports = EstudentsService;
