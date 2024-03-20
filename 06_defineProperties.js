const damian = {
	name: 'Damian',
	age: 21,
	courses: ['HTML', 'CSS', 'JavaScript'],
	addCourse(newCourse) {
		this.courses.push(newCourse);
	},
};

console.log(Object.getOwnPropertyDescriptors(damian));

Object.defineProperties(damian, {
	value: '',
	writable: true,
	enumerable: true,
	configurable: true,
});

Object.defineProperties(damian, 'NasaTech', {
	value: 'Nasa',
	writable: false,
	enumerable: false,
	configurable: false,
});

Object.defineProperties(damian, 'Terminal', {
	value: 'PowerShell',
	writable: false,
	enumerable: false,
	configurable: false,
});
