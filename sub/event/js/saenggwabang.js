window.onload = function() {
    const modalOne = document.querySelector(".modal-one")
    const modalTwo = document.querySelector(".modal-two")
    const modalThree = document.querySelector(".modal-three")
    const modalFour = document.querySelector(".modal-four")
    const modalFive = document.querySelector(".modal-five")
    const modalSix = document.querySelector(".modal-six")
    const modalSeven = document.querySelector(".modal-seven")
    const modalEight = document.querySelector(".modal-eight")
    const modalNine = document.querySelector(".modal-nine")
    const modalTen = document.querySelector(".modal-ten")
    const modalElev = document.querySelector(".modal-elev")
    const modalTwel = document.querySelector(".modal-twel")

    const openBox1 = document.querySelector("#snack1")
    const openBox2 = document.querySelector("#snack2")
    const openBox3 = document.querySelector("#snack3")
    const openBox4 = document.querySelector("#snack4")
    const openBox5 = document.querySelector("#snack5")
    const openBox6 = document.querySelector("#snack6")
    const openBox7 = document.querySelector("#tea1")
    const openBox8 = document.querySelector("#tea2")
    const openBox9 = document.querySelector("#tea3")
    const openBox10 = document.querySelector("#tea4")
    const openBox11 = document.querySelector("#tea5")
    const openBox12 = document.querySelector("#tea6")

    const closeModal1 = document.querySelector(".closeBtn1")
    const closeModal2 = document.querySelector(".closeBtn2")
    const closeModal3 = document.querySelector(".closeBtn3")
    const closeModal4 = document.querySelector(".closeBtn4")
    const closeModal5 = document.querySelector(".closeBtn5")
    const closeModal6 = document.querySelector(".closeBtn6")
    const closeModal7 = document.querySelector(".closeBtn7")
    const closeModal8 = document.querySelector(".closeBtn8")
    const closeModal9 = document.querySelector(".closeBtn9")
    const closeModal10 = document.querySelector(".closeBtn10")
    const closeModal11 = document.querySelector(".closeBtn11")
    const closeModal12 = document.querySelector(".closeBtn12")
 
    openBox1.addEventListener("click", function() {
        modalOne.style.display = "block";
        document.body.style.overflow = "hidden";
    })
    closeModal1.addEventListener("click", function() {
        modalOne.style.display = "none";
        document.body.style.overflow = "unset";
    })

    openBox2.addEventListener("click", function() {
        modalTwo.style.display = "block";
        document.body.style.overflow = "hidden";
    })
    closeModal2.addEventListener("click", function() {
        modalTwo.style.display = "none";
        document.body.style.overflow = "unset";
    })

    openBox3.addEventListener("click", function() {
        modalThree.style.display = "block";
        document.body.style.overflow = "hidden";
    })
    closeModal3.addEventListener("click", function() {
        modalThree.style.display = "none";
        document.body.style.overflow = "unset";
    })

    openBox4.addEventListener("click", function() {
        modalFour.style.display = "block";
        document.body.style.overflow = "hidden";
    })
    closeModal4.addEventListener("click", function() {
        modalFour.style.display = "none";
        document.body.style.overflow = "unset";
    })

    openBox5.addEventListener("click", function() {
        modalFive.style.display = "block";
        document.body.style.overflow = "hidden";
    })
    closeModal5.addEventListener("click", function() {
        modalFive.style.display = "none";
        document.body.style.overflow = "unset";
    })

    openBox6.addEventListener("click", function() {
        modalSix.style.display = "block";
        document.body.style.overflow = "hidden";
    })
    closeModal6.addEventListener("click", function() {
        modalSix.style.display = "none";
        document.body.style.overflow = "unset";
    })

    openBox7.addEventListener("click", function() {
        modalSeven.style.display = "block";
        document.body.style.overflow = "hidden";
    })
    closeModal7.addEventListener("click", function() {
        modalSeven.style.display = "none";
        document.body.style.overflow = "unset";
    })

    openBox8.addEventListener("click", function() {
        modalEight.style.display = "block";
        document.body.style.overflow = "hidden";
    })
    closeModal8.addEventListener("click", function() {
        modalEight.style.display = "none";
        document.body.style.overflow = "unset";
    })

    openBox9.addEventListener("click", function() {
        modalNine.style.display = "block";
        document.body.style.overflow = "hidden";
    })
    closeModal9.addEventListener("click", function() {
        modalNine.style.display = "none";
        document.body.style.overflow = "unset";
    })

    openBox10.addEventListener("click", function() {
        modalTen.style.display = "block";
        document.body.style.overflow = "hidden";
    })
    closeModal10.addEventListener("click", function() {
        modalTen.style.display = "none";
        document.body.style.overflow = "unset";
    })

    openBox11.addEventListener("click", function() {
        modalElev.style.display = "block";
        document.body.style.overflow = "hidden";
    })
    closeModal11.addEventListener("click", function() {
        modalElev.style.display = "none";
        document.body.style.overflow = "unset";
    })

    openBox12.addEventListener("click", function() {
        modalTwel.style.display = "block";
        document.body.style.overflow = "hidden";
    })
    closeModal12.addEventListener("click", function() {
        modalTwel.style.display = "none";
        document.body.style.overflow = "unset";
    })
}