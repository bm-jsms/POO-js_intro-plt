class Student {
	constructor({ name, age, email }) {
		this.name = name;
		this.age = age;
		this._email = email;
	}
	get email() {
		return this._email;
	}

	set email(newEmail) {
		if (typeof newEmail === 'string') {
			this._email = newEmail;
		}
	}
}

const santi = new Student({
	name: 'Santi',
	age: 20,
	email: 'santi@me.com',
});

console.log(santi.email);
santi.email = 'santi@me.com';

console.log(santi.email);
