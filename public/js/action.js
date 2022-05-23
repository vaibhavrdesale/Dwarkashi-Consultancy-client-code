window.addEventListener("scroll", () => {
    var nav = document.querySelector('.navigation');
    nav.classList.toggle('sticky', window.scrollY > 0)
})

const navigationToggler = document.querySelector(".navigation-toggler");
const navigationUl = document.getElementById("ul");
var navigation = document.querySelector(".navigation")

navigationToggler.addEventListener("click", navigationTogglerClick);

function navigationTogglerClick(){
    navigationToggler.classList.toggle("open-navigation-toggler");
    navigationUl.classList.toggle("open");
    navigation.classList.toggle("navigationBg");
}





