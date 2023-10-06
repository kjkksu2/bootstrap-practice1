const myCarouselElement = document.querySelector("#slider");

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 3000,
  touch: true,
});

function userScroll() {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("bg-dark");
    } else {
      navbar.classList.remove("bg-dark");
    }
  });
}

document.addEventListener("DOMContentLoaded", userScroll);
