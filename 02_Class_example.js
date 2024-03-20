class Student {
	constructor({
		name,
		email,
		usernmae,
		twitter = undefined,
		instagram = undefined,
		facebook = undefined,
	}) {
		this.name = name;
		this.email = email;
		this.usernmae = usernmae;
		this.socialMedia = {
			twitter,
			instagram,
			facebook,
		};
	}
}

const miguel = new Student({
	name: 'Miguel',
	age: 20,
	courses: ['HTML', 'CSS', 'JavaScript'],
	email: 'miguel@me.com',
	instagram: 'DMiguel',
});
