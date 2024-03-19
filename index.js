class Student {
	// Params
	constructor(name, age, courses) {
		this.name = name;
		this.age = age;
		this.courses = courses;
	}

	passCourse(newCourse) {
		this.courses.push(newCourse);
	}
}

const miguel = new Student('Miguel', 20, ['Java', 'Kotlin', 'SQL']);
