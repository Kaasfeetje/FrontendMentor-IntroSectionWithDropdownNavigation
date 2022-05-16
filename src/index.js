mobile_nav_el = document.querySelector(".mobile-nav");

document
    .querySelector(".hamburger")
    .addEventListener("click", () => mobile_nav_el.classList.toggle("show"));
document
    .querySelector(".mobile-head")
    .addEventListener("click", () => mobile_nav_el.classList.toggle("show"));

dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
    dropdown.children[0].addEventListener("click", (e) => {
        dropdown.classList.toggle("show");
    });
});
