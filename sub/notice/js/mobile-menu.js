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
        for (var j = 0 ; j < acc.length; j++) {
            acc[j].classList.remove("active");
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