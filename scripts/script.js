const nav = document.querySelector("nav");
let isScrolled = false;

function checkScroll() {
  const scrolledDown = window.scrollY > 0;

  if (scrolledDown && !isScrolled) {
    nav.classList.add("scrolled");
    isScrolled = true;
  } else if (!scrolledDown && isScrolled) {
    nav.classList.remove("scrolled");
    isScrolled = false;
  }
}

window.addEventListener("scroll", checkScroll);