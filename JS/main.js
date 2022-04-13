// Dark Mode
const checkbox = document.querySelector(".checkbox");
checkbox.addEventListener("click", toggleClick);

console.log(click);

function click() {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
  } else {
    document.body.classList.add("dark");
  }
}

function toggleClick() {
  document.body.classList.toggle("dark");
}

// Show "Arrow Up" button when scrolling down
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 3) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});

// Handle click on the "arrow up" button
arrowUp.addEventListener("click", () => {
  console.log("Work?");
  scrollIntoView("#home");
});

function scrollIntoView(e) {
  const scrollTo = document.querySelector(e);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".menu");
navbarMenu.addEventListener("click", e => {
  const link = e.target.dataset.link;
  if (link == null) {
    // 아무것도 하지 않는다.
    return;
  }

  console.log(e.target.dataset.link);
  scrollIntoView(link);
});

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector(".home");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});
