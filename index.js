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

const maria = new Student('Maria', 20, ['Java', 'Python', 'C++']);

console.log(maria.name);
console.log(maria.age);
console.log(maria.courses);

console.log(maria);

maria.passCourse('C#');

console.log(maria.courses);
