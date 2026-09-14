const menuButton = document.querySelector("#menu");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", function () {

    nav.classList.toggle("open");

    if (nav.classList.contains("open")) {
        menuButton.textContent = "X";
    } else {
        menuButton.textContent = "☰";
    }
});

document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    document.lastModified;