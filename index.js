const obj1 = {
	a: 'a',
	b: 'b',
	c: {
		d: 'd',
		e: 'e',
	},
};

const stringifyComplexObj = JSON.stringify(obj1);

console.log(stringifyComplexObj);

const obj2 = JSON.parse(stringifyComplexObj);

console.log(stringifyComplexObj);

const a = {};
console.log(typeof a);
