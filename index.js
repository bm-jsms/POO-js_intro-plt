class Student {
	// Params
	constructor({ name, age, email, courses = [] }) {
		this.name = name;
		this.age = age;
		this.email = email;
		this.courses = courses;
	}

	passCourse(newCourse) {
		this.courses.push(newCourse);
	}
}

const miguel = new Student({
	name: 'Miguel',
	age: 20,
	courses: ['HTML', 'CSS', 'JavaScript'],
	email: 'miguel@me.com',
});

console.log(miguel);
