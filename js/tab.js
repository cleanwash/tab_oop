/*
var tab = document.querySelector('#tab1');
var btns = tab.querySelectorAll('ul li');
var boxs = tab.querySelectorAll('section article');

btns.forEach(function (btn, idx) {
	btn.addEventListener('click', function () {
		//activation(btns, idx);
		//activation(boxs, idx);
		[btns, boxs].forEach(function (el) {
			activation(el, idx);
		});
	});
});

function activation(arr, idx) {
	arr.forEach(function (el) {
		el.classList.remove('on');
	});

	arr[idx].classList.add('on');
}
*/

/*
	화살표함수 안쪽에서는 this객체가 생성안됨, 화살표 함수가 내부 this값이 없기 때문에 상위스코의 this값을 가져옴

	es5에서 일반function은 내부적으로 this객체가 생성되고 해당 값을 window나 이벤트함수안쪽에서는 이벤트가 발생한 대상을 지칭
	
	일반 function문에서는 위와 같은 문제를 막기위해서 function문뒤에 .bind()를 이용해서 함수외부에서 함수내부의 this객체값을 고정가능
*/

function Tab(el) {
	this.tab = document.querySelector(el);
	this.btns = this.tab.querySelectorAll('ul li');
	this.boxs = this.tab.querySelectorAll('section article');
	this.bindingEvent();
}
Tab.prototype.bindingEvent = function () {
	console.log(this);
	this.btns.forEach(
		function (btn, idx) {
			console.log('forEach', this);
			btn.addEventListener(
				'click',
				function () {
					console.log('event', this);
					[this.btns, this.boxs].forEach(
						function (el) {
							this.activation(el, idx);
						}.bind(this)
					);
				}.bind(this) //forEach문에서 instance로 고정된 this값으로 다시 이벤트문안쪽의 this객체 고정
			);
		}.bind(this) //forEach밖에 있는 instace this값으로 내부 this값 고정
	);
};
Tab.prototype.activation = function (arr, idx) {
	arr.forEach(function (el) {
		el.classList.remove('on');
	});

	arr[idx].classList.add('on');
};

//es5에서 객체지향이 비효율적인 이유
//생성자함수와 일반함수의 구분이 없음
//일일이 prototype에 메서드를 등록해야 되는 번거로움
//function문안쪽의 this객체가 계속 변경되기 때문에 .bind()문으로 고정해야되는 번거로움
