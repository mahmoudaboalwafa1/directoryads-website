// Start Header
const menu_icon = document.getElementById("menu_icon");
const navbar = document.querySelector("nav");
const close_icon = document.getElementsByClassName("close")[0];
const arrow_down_nav = document.querySelector(".arrow-down");
const elementsInNav = document.querySelector("a ul");
let showIcon = false;
let showNav = false;

menu_icon.addEventListener("click", () => {
  showIcon = !showIcon;
  showIcon ? (navbar.style.display = "flex") : (navbar.style.display = "none");
});

close_icon.addEventListener("click", () => {
  close_icon.parentElement.style.display = "none";
  showIcon = !showIcon;
});

arrow_down_nav.addEventListener("click", () => {
  showNav
    ? (elementsInNav.style.display = "block")
    : (elementsInNav.style.display = "none");

  showNav = !showNav;
});
// End Header

// Start Testimonials
const testiBox = document.querySelectorAll(".testi-box");
const leftBtn = document.querySelector("button.arrow-left");
const rightBtn = document.querySelector("button.arrow-right");
const bullets = document.querySelectorAll(".bullets li");
let count = 0;
const timerSliderTesti = 3000;

leftBtn.onclick = () => {
  count -= 1;
  if (count > 0) {
    count = 0;
  }
  testiFn(count);
};
rightBtn.onclick = () => {
  count += 1;
  if (count >= 4) {
    count = 0;
  }
  testiFn(count);
};

function testiFn(count) {
  if (count >= 0 && count < 4) {
    testiBox.forEach((ele, index) => {
      if (index === count) {
        ele.classList.add("active");
      } else {
        ele.classList.remove("active");
      }
    });
    bullets.forEach((ele, index) => {
      if (index === count) {
        ele.classList.add("active");
      } else {
        ele.classList.remove("active");
      }
    });
  }
}

testiFn(count);

// Slider Testimonials
const counter = setInterval(() => {
  count += 1;
  if (count >= 4) {
    count = 0;
  }
  testiFn(count);
}, timerSliderTesti);

// End Testimonials
