const tabOne = document.getElementById("tabOne");
const imageOne = document.getElementById("imageOne");

const tabTwo = document.getElementById("tabTwo");
const imageTwo = document.getElementById("imageTwo");

const addNew = document.getElementById("addNew");
const imageThr = document.getElementById("imageThr");

tabOne.addEventListener("click", function() {
    imageOne.style.display = "block";
    imageTwo.style.display = "none";
    imageThr.style.display = "none";
});

tabTwo.addEventListener("click", function() {
    imageOne.style.display = "none";
    imageTwo.style.display = "block";
    imageThr.style.display = "none";
});

addNew.addEventListener("click", function() {
    imageOne.style.display = "none";
    imageTwo.style.display = "none";
    imageThr.style.display = "block";
});