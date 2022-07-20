//기본이벤트 제거하기
window.addEventListener("wheel", function(e){
	e.preventDefault();
},{passive : false});

//페이지 선언
var $html = $("html");
var page = 1;
var lastPage = $("section").length;

$html.animate({scrollTop:0},10);

$(window).on("wheel", function(e){
 
	if($html.is(":animated")) return;
 
	if(e.originalEvent.deltaY > 0){
		if(page== lastPage) return;
 
		page++;
	}else if(e.originalEvent.deltaY < 0){
		if(page == 1) return;
 
		page--;
	}
	var posTop = (page-1) * $(window).height();
 
	$html.animate({scrollTop : posTop});
 
});

//메인슬라이드
let slides = document.querySelector("#intro"); //전체 슬라이드 컨테이너
let slideImg = document.querySelectorAll("#intro > div");//모든 슬라이드들
let currentIdx = 0; //현재 슬라이드 index
const slideCount = slideImg.length; // 슬라이드 개수
let prev1 = document.querySelector('#content1 .prev'); //이전 버튼
let next1 = document.querySelector('#content1 .next'); //다음 버튼

function moveSlide(num) {
	slides.style.left = -num * 100 + '%';
	currentIdx = num;
}

prev1.addEventListener('click', function () {
	if (currentIdx !== 0) 
	moveSlide(currentIdx - 1);
});

next1.addEventListener('click', function () {
if (currentIdx !== slideCount - 1) 
	moveSlide(currentIdx + 1);
});

setTimeout (function() {
	setInterval(function(){
		if (currentIdx !== slideCount - 1) {
		moveSlide(currentIdx + 1);
	}},4000)
}, 5000)



window.addEventListener("scroll", function(){
	let navList = document.querySelectorAll('.nav_list');
	let scrollLocation = document.documentElement.scrollTop; 
	let windowHeight = window.innerHeight; 
	let currentScrollIdx = Math.floor(scrollLocation/windowHeight);

	for(i=0; i<navList.length; i++){
		if(currentScrollIdx == i){
			for(j=0; j<navList.length; j++){
				navList[j].classList.remove('view');
			}
			navList[i].classList.add('view');
		}
	}
})




