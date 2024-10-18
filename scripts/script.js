const pageWithoutScroll = window.innerWidth - 15;
const burgerMenu = document.querySelector('.burger-menu')
const nav = document.querySelector("nav");
let isScrolled = false;

const checkScroll = () => {
  const scrolledDown = window.scrollY > 0;
  
  if (scrolledDown && !isScrolled) {
    nav.classList.add("scrolled");
    isScrolled = true;
  } else if (!scrolledDown && isScrolled) {
    nav.classList.remove("scrolled");
    isScrolled = false;
  }
}
pageWithoutScroll > 660 && window.addEventListener("scroll", checkScroll)

const OpenBurger = () => {
console.log(burgerMenu);
burgerMenu.classList.toggle('open')

}
// switch to intersectionObserver