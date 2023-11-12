class Tab {
	//클래스에 직접 멤버변수 등록 가능 이때 변수명에 아무것도 없으면 (public)인스턴스에서 접근 가능
	//클래스 멤버변수앞에 #을 붙이면 private으로 등록되면서 인스턴스에서 접근 불가
	//원래는 타입스크립트에서만 지원하던 private키워드를 일반자스에도 #을통해서 설정가능해짐
	#defOpt = { activeClass: 'on', fadeSpeed: 0 };

	constructor(el, opt) {
		if (!el) return console.error('탭프레임명은 필수입력 항목입니다.');

		const resultOpt = { ...this.#defOpt, ...opt };
		this.activeClass = resultOpt.activeClass;

		this.fadeSpeed = resultOpt.fadeSpeed;
		this.eventBlock = false;

		this.init(el);
		this.bindingEvent();
	}

	//인스턴스 옮겨진 정보값을 받아서 DOM탐색같은 초기화 메서드
	init(el) {
		this.el = document.querySelector(el);
		this.btns = this.el.querySelectorAll('ul li');
		this.boxs = this.el.querySelectorAll('section article');
		this.setHeight(0);

		this.el.style.transitionProperty = 'height';
		this.el.style.transitionDuration = this.fadeSpeed / 1000 + 's';

		this.boxs.forEach((el) => {
			el.style.transitionProperty = 'opacity';
			el.style.transitionDuration = this.fadeSpeed / 1000 + 's';
		});
	}

	//이벤트 호출등이 모여있는 메서드
	bindingEvent() {
		this.btns.forEach((btn, idx) => {
			btn.addEventListener('click', (e) => {
				if (e.currentTarget.classList.contains(this.activeClass) || this.eventBlock) return;
				this.eventBlock = true;

				[this.btns, this.boxs].forEach((el) => {
					this.activation(el, idx);
				});
			});
		});
	}

	//버튼, 박스 활성화 메서드
	activation(arr, idx) {
		console.log('activation');
		arr.forEach((el) => {
			el.classList.remove(this.activeClass);
		});
		this.setHeight(idx);
		arr[idx].classList.add(this.activeClass);
		setTimeout(() => (this.eventBlock = false), this.fadeSpeed);
	}

	//활성화 탭박스 높이값에 맞게 전체 프레임 높이값 변경 메서드
	setHeight(idx) {
		const activeHT = parseInt(getComputedStyle(this.boxs[idx]).height);
		const frameHT = activeHT + 50;
		this.el.style.height = frameHT + 'px';
	}
}
