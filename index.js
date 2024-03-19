const daniel = {
	name: 'Daniel',
	age: 20,
	courses: ['HTML', 'CSS', 'JavaScript'],

	passCourse(newCourse) {
		this.courses.push(newCourse);
	},
};

console.log(daniel.name);
console.log(daniel.courses);

daniel.passCourse('Python');

console.log(daniel.courses);
