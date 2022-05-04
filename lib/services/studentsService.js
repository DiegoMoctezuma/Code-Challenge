class EstudentsService {
	static getHaveCertification(students) {
		const haveCertication = students.filter(
			(student) => student.haveCertification === true
		);

		return haveCertication.map((student) => student.email);
	}
}

module.exports = EstudentsService;
