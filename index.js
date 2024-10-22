const googleChrome = document.querySelector(".chrome");
const googleChromeHeader = document.querySelector(".divheader");
const footer = document.querySelector(".footer");
const section = document.querySelector(".section");
const dotGoogle = document.querySelector(".dotGoogle");
const maximiseButton = document.querySelector(".maximise");
const closeButton = document.querySelectorAll(".close");
const minimiseButton = document.querySelector(".minimise");
const googleIcon = document.querySelector(".googleIcon");

//Maximise
let isMaximised = false;

maximiseButton.addEventListener("click", () => {
  if (isMaximised) {
    isMaximised = false;
    googleChrome.style.width = "50%";
    section.style.height = "calc(100dvh - (80px + 35px))";
    googleChrome.style.borderRadius = "10px";
    section.style.resize = "";
    footer.style.display = "";
  } else {
    googleChrome.style.width = "100%";
    googleChrome.style.height = "100%";
    googleChrome.style.left = "0px";
    googleChrome.style.top = "0px";
    section.style.resize = "unset";
    section.style.resize = "none";
    section.style.height = "calc(100vh - 35px)";
    googleChrome.style.borderRadius = "0px";
    footer.style.display = "none";
    isMaximised = true;
  }
});

//Minimise Google chrome
let isMinimised = false;

minimiseButton.addEventListener("click", () => {
  googleIcon.classList.add("bouncingEffect");
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
    googleIcon.classList.add("bouncingEffect");
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
    googleIcon.classList.remove("bouncingEffect");
    dotGoogle.style.display = "none";
    isMinimised = false;
  }
});

//time header
const dayTime = document.querySelector(".day");
const monthTime = document.querySelector(".date");
const currentTime = document.querySelector(".time");

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
const months = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

//Time header handler
function Time() {
  let time = new Date();
  let date = time.getDate();
  let day = weekdays[time.getDay()];
  let month = months[time.getMonth()];
  let timeCurrent = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  dayTime.innerText = `${day}`;
  monthTime.innerText = `${month} ${date}`;
  currentTime.innerText = `${timeCurrent}`;
}

Time();

// Updates the timer every second
// To match the systems clock
setInterval(Time, 1000);

//making the div draggable
function DragDivChrome({ movementX, movementY }) {
  let getChrome = window.getComputedStyle(googleChrome);

  let leftValue = parseInt(getChrome.left);
  let topValue = parseInt(getChrome.top);

  //getting the section and chrome boundaries
  let sectionSize = section.getBoundingClientRect();
  let chromeSize = googleChrome.getBoundingClientRect();

  let Left = leftValue + movementX;
  let Top = topValue + movementY;

  //get the newleft considering the section, and chrome dimensions
  // To prevent overlapping
  Left = Math.max(0, Math.min(Left, sectionSize.width - chromeSize.width));
  Top = Math.max(0, Math.min(Top, sectionSize.height - chromeSize.height));

  googleChrome.style.left = `${Left}px`;
  googleChrome.style.top = `${Top}px`;
}

googleChromeHeader.addEventListener("mousedown", () => {
  // Should Drag if its not maximised
  if (isMaximised === false) {
    googleChromeHeader.addEventListener("mousemove", DragDivChrome);
  }
});

document.addEventListener("mouseup", () => {
  googleChromeHeader.removeEventListener("mousemove", DragDivChrome);
});

// in case of any resize, the google chrome should go back to top 0 and left 0
window.addEventListener("resize", () => {
  googleChrome.style.left = "0px";
  googleChrome.style.top = "0px";
});

const year = document.querySelector(".year");
let yearToday = new Date();

year.innerText = `${yearToday.getFullYear()}`;
