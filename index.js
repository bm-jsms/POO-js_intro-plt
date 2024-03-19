const daniel = {
	name: 'Daniel',
	age: 20,
	courses: ['HTML', 'CSS', 'JavaScript'],

	passCourse(newCourse) {
		this.courses.push(newCourse);
	},
};

function Student(name, age, courses) {
	this.name = name;
	this.age = age;
	this.courses = courses;

	/* this.passCourse = function (newCourse) {
		this.courses.push(newCourse);
	}; */
}

Student.prototype.passCourse = function (newCourse) {
	this.courses.push(newCourse);
};
