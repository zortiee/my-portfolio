const switchElement = document.querySelector('.switch');
const footerElement = document.querySelector('footer');
switchElement.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    footerElement.classList.toggle('dark');
    switchElement.classList.toggle('switch-light');
})

const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const items = document.querySelectorAll(".item");

/* Toggle mobile menu */

function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
  } else {
    menu.classList.add("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
  }
}

/* Event Listeners */
toggle.addEventListener("click", toggleMenu, false);

/* Time Record */

const timeContainer = document.getElementById("time-container");
const BIRTH_DAY = "09-30-2022";
const BIRTH_DAY_DATE = new Date(BIRTH_DAY);
const intlNumberFormatter = new Intl.NumberFormat("en-US");

setInterval(() => {
  const now = new Date();
  const difference = Math.floor(
    (now.getTime() - BIRTH_DAY_DATE.getTime()) / 1000
  );

  timeContainer.innerText = intlNumberFormatter.format(difference);
}, 1000);
