function userScroll() {
  const navbar = document.querySelector(".navbar");
  const toTopBtn = document.querySelector("#to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-sticky");
      toTopBtn.classList.add("show");
    } else {
      navbar.classList.remove("navbar-sticky");
      toTopBtn.classList.remove("show");
    }
  });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "instant" });
  //   document.body.scrollTop = 0;
  //   document.documentElement.scrollTop = 0;
}

function incrementStats() {
  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
    counter.textContent = 0;

    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      const c = +counter.textContent;

      const increment = target / 200;

      if (c < target) {
        counter.textContent = Math.ceil(c + increment);
        setTimeout(updateCounter, 1);
      } else {
        counter.textContent = target;
      }
    };

    updateCounter();
  });
}

document.addEventListener("DOMContentLoaded", userScroll);
document.addEventListener("DOMContentLoaded", incrementStats);
document.querySelector("#to-top").addEventListener("click", scrollToTop);
