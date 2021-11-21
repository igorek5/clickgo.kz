const mainNav = document.querySelector(".main-nav");
const mainNavButton = document.querySelector(".main-nav__toggle");

const setControlMenu = () => {
  if (mainNav) {
    mainNav.classList.remove("open");
    mainNav.classList.remove("no-js");
    mainNavButton.addEventListener("click", function (evt) {
      evt.preventDefault();
      mainNav.classList.toggle("open");
    });
  }
}

export { setControlMenu };
