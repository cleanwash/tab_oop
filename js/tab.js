class Student {
	//일일 변경될 필요가 없는 공통의 값은 인스턴스 객체가 아니라 class 자체적으로 등록해서 전달가능 (멤버변수)
	//public : 외부에서 변경가능한 멤버변수
	//school = 'dcodelab';
	//static : 외부에서 변경불가능한 멤버변수
	//private : 외부에서 변경불가능하게 처리
	#school = 'dcodelab';

	constructor(name, age, gender) {
		this.name = name;
		this.age = age;
		this.gender = gender;
	}
}

const s1 = new Student('David', 20, 'male');
const s2 = new Student('Emily', 22, 'female');
