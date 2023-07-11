/*  Animation aos  */

AOS.init({
    delay:400,
    duration:1000
})


/* JS */
let burgerMenu = document.querySelector("#burger-menu");
let overlay = document.querySelector("#menu");

burgerMenu.addEventListener("click", function(){
    this.classList.toggle("close");
    overlay.classList.toggle("overlay");
});

