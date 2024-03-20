class Student {
	constructor({ name, age, email, courses = [] }) {
		this.name = name;
		this.age = age;
		this.email = email;
		this.courses = courses;
	}
}

class PrimaryStudent extends Student {
	constructor(props) {
		super(props);
	}

	passCourse(newCourse) {
		this.courses.push(newCourse);
	}

	getCourses() {
		return this.courses;
	}
}

const daniel = new PrimaryStudent({
	name: 'Daniel',
	age: 20,
	email: 'daniel@me.com',
	courses: ['HTML', 'CSS', 'JavaScript'],
});

console.log(daniel.getCourses());

daniel.passCourse('Python');

console.log(daniel.getCourses());
