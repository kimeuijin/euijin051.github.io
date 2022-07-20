// 회원가입 페이지 목록에서 선택한 이메일 주소 자동 입력
function input_email() {
	const mailServer1 = document.getElementById("mailServer1");
	const mailServer2 = document.getElementById("mailServer2");
	mailServer1.value = mailServer2.value;
}


// 회원 탈퇴 modal 창
const body = document.querySelector("body");
const modal = document.querySelector(".modal");
const btnOpenPopup = document.querySelector(".resign");
const btnClosePopup = document.querySelector(".back");
const scrollBarWidth = window.innerWidth - document.body.offsetWidth; // 오른쪽 스크롤바 크기
console.log(scrollBarWidth);

btnOpenPopup.addEventListener("click", () => {
	modal.classList.toggle("show");
	if (modal.classList.contains("show")) {
		body.style.overflow = "hidden";
		body.style.marginRight = scrollBarWidth + "px";
		console.log(body.style.marginRight);
	}
});

btnClosePopup.addEventListener("click", event => {
	modal.classList.toggle("show");
	if (!modal.classList.contains("show")) {
		body.style.overflow = "auto";
		body.style.marginRight = 0;
		console.log(body.style.marginRight);
	}
})

modal.addEventListener("click", (event) => {
	if (event.target === modal) {
		modal.classList.toggle("show");
		if (!modal.classList.contains("show")) {
			body.style.overflow = "auto";
			body.style.marginRight = 0;
			console.log(body.style.marginRight);
		}
	}
});