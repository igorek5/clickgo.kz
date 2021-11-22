const mainNav = document.querySelector(".main-nav");
const mainNavButton = document.querySelector(".main-nav__toggle");
const mainNavLink = document.querySelectorAll(".main-nav__link");
const body = document.querySelector(".page-body");

const isEscEvent = (evt) => evt.key === "Escape" || evt.key === "Esc";

const linkMenuClick = () => {
  mainNav.classList.remove("open");
}

const documentKeydownHandler = (evt) => {
  if (isEscEvent(evt)) {
      evt.preventDefault();
      mainNav.classList.remove("open");
      closeMenuHandler()
      mainNavButton.focus();
  }
}

const setControlMenu = () => {
  if (mainNav) {
    mainNav.classList.remove("open");
    mainNav.classList.remove("no-js");
    mainNavButton.addEventListener("click", function (evt) {
      evt.preventDefault();
      mainNav.classList.toggle("open");


      if (mainNav.classList.contains("open")) {
        document.addEventListener("keydown", documentKeydownHandler);
        mainNavLink.forEach((el) => {
          el.addEventListener("click", linkMenuClick);
        });
      }
    });
  }
}

function closeMenuHandler() {
  document.removeEventListener('keydown', documentKeydownHandler);
  mainNavLink.forEach((el) => {
    el.removeEventListener("click", linkMenuClick);
  })
}

export { setControlMenu };
