class Student {
	constructor(name, age, gender) {
		this.name = name;
		this.age = age;
		this.gender = gender;
		this.school = 'dcodelab';
	}
	get school() {
		return this.value;
	}
	set school(value) {
		this.value = value === 'dcodelab' ? value : (value = 'dcodelab');
	}
}

const s1 = new Student('David', 20, 'male');
const s2 = new Student('Emily', 22, 'female');

s2.school = 'abc';

console.log(s1);
console.log(s2);
