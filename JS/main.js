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

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".menu");
navbarMenu.addEventListener("click", e => {
  const link = e.target.dataset.link;
  if (link == null) {
    // 아무것도 하지 않는다.
    return;
  }

  console.log(e.target.dataset.link);
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: "smooth" });
});
