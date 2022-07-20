// faq 아코디언
const faqAcc = document.getElementsByClassName("title");

for (let i = 0; i < faqAcc.length; i++) {
    faqAcc[i].onclick = function() {
        for (let j = 0 ; j < faqAcc.length; j++) {
            faqAcc[j].classList.remove("open");
            if (this !== faqAcc[j]) {
                faqAcc[j].nextElementSibling.style.maxHeight = null;
                faqAcc[j].nextElementSibling.style.paddingTop = null;
            }
        }

        this.classList.toggle("open");
        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            this.classList.remove("open");
            panel.style.paddingTop = null;
            panel.style.maxHeight = null;
        } else {
            panel.style.paddingTop = "20px";
            panel.style.maxHeight = panel.scrollHeight + 20 + "px";
        }
    }
}