// 로그인 페이지 메인 햄버거 버튼
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
document.querySelector(".close-btn").addEventListener("click", showMenu);


// 로그인 페이지 메인 메뉴 아코디언
const mainAcc = document.getElementsByClassName("accordion");

for (var i = 0; i < mainAcc.length; i++) {
    mainAcc[i].onclick = function() {
        for (var j = 0 ; j < mainAcc.length; j++) {
            mainAcc[j].classList.remove("active");
            if (this !== mainAcc[j]) {
                mainAcc[j].nextElementSibling.style.maxHeight = null;
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