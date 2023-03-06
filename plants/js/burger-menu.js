let burgerBtn = document.querySelector(".burger-menu");
let menu = document.querySelector(".menu");
let menuLi = document.querySelector(".menu ul");

burgerBtn.addEventListener("click", function() {
    burgerBtn.classList.toggle("active");
    menu.classList.toggle("active");
});

menuLi.addEventListener("click", function() {
    burgerBtn.classList.toggle("active");
    menu.classList.toggle("active");
});