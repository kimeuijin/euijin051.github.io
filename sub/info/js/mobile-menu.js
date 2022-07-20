// 모바일 햄버거 버튼
const hamburger = document.getElementById("menu");
const menuBar = document.querySelector(".mobile-gnb");

let subToggle = true;
function showMenu(){
    if(subToggle) {
        menuBar.style.setProperty('height', 'calc(100vh - 80px)');
        subToggle =! subToggle;
      } else {
        menuBar.style.height = "0px";
        subToggle =! subToggle;
    }
}

hamburger.addEventListener("click", showMenu);


// 모바일 메뉴 아코디언
const acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
        // 클릭이 일어났을 때 기존에 열려 있던 아코디언을 접는다. (1개의 아코디언만 열리도록)
        for (var j = 0 ; j < acc.length; j++) {
            // 버튼 상태에 입혀진 active 라는 클래스를 지운다.
            acc[j].classList.remove("active");
            // 버튼 다음에 있는 div 콘텐츠 높이를 0으로 만든다. == 아코디언을 접는다.
            if (this !== acc[j]) {
                acc[j].nextElementSibling.style.maxHeight = null;
            }
        }

        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            this.classList.remove("active");
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }
}