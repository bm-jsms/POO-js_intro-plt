class Studemt {
	constructor({ name, age, email }) {
		this.name = name;
		this.age = age;
		this._email = email;
	}
	get email() {
		return this._email;
	}
}

const santi = new Studemt({
	name: 'Santi',
	age: 20,
	email: 'santi@me.com',
});

console.log(santi.email);
