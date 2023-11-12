class Student {
	//private 클래스 내부에서 접근 불가
	//인스턴스에서 확인가능
	//인스턴스에서 수정불가
	#school = 'dcodelab';

	//static 클래스 내부에서 접근가능
	//인스턴스에서 확인 불가
	//인스턴스에서 수정 가능
	static edu = 'programing';

	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	inform() {
		console.log(this.name, this.age, Student.edu, this.#school);
	}
}

const s1 = new Student('David', 20);
s1.edu = 'play';

//private 멤버변수는 인스턴스, 생성자에서 접근 금지
//s1.#school = 'abc';
//Student.#school = 'abc';
console.log(s1);
s1.inform();
