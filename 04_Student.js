function greet(name) {
	console.log(`Hello, I'm ${name}, and I'm a student`);
}

export class CreateStudent {
	constructor({ name, age }) {
		this.name = name;
		this.age = age;
	}

	introduce() {
		greet(this.name);
	}
}
