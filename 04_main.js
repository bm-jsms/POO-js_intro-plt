import { CreateStudent } from './04_Student.js';

const student = new CreateStudent({ name: 'Daniel', age: 20 });

student.introduce();

console.log(student.name);
