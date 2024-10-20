let googleChrome = document.querySelector(".chrome");
let footer = document.querySelector(".footer");
let section = document.querySelector(".section");
let dotGoogle = document.querySelector(".dotGoogle");
let maximiseButton = document.querySelector(".maximise");
let closeButton = document.querySelectorAll(".close");
let minimiseButton = document.querySelector(".minimise");
let googleIcon = document.querySelector(".googleIcon");

//Maximise
let isMaximised = false;

maximiseButton.addEventListener("click", () => {
  if (isMaximised == true) {
    isMaximised = false;
    googleChrome.style.width = "50%";
    section.style.height = "calc(100dvh - (80px + 35px))";
    googleChrome.style.borderRadius = "10px";
    footer.style.display = "";
  } else {
    googleChrome.style.width = "100%";
    section.style.height = "calc(100vh - 35px)";
    googleChrome.style.borderRadius = "0px";
    footer.style.display = "none";
    isMaximised = true;
  }
});

//Minimise Google chrome
let isMinimised = false;

minimiseButton.addEventListener("click", () => {
  section.style.visibility = "hidden";
  dotGoogle.style.display = "block";
  if (isMaximised) {
    section.style.height = "calc(100dvh - (80px + 35px))";
    footer.style.display = "";
  }
  isMinimised = true;
});

//closeButtons
closeButton.forEach((e) => {
  e.addEventListener("click", () => {
    section.style.visibility = "hidden";
    dotGoogle.style.display = "block";
    isMinimised = true;
    if (isMaximised) {
      section.style.height = "calc(100dvh - (80px + 35px))";
      footer.style.display = "";
    }
  });
});

//Google footer Icon
googleIcon.addEventListener("click", () => {
  if (isMinimised) {
    section.style.visibility = "visible";
    dotGoogle.style.display = "none";
    isMinimised = false;
  }
});
