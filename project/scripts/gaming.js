const year = new Date().getFullYear();
document.querySelector("#currentyear").textContent = `${year}`;

const modified = document.lastModified;
document.querySelector("#lastModified").textContent = `Last Modified: ${modified}`;

const gamingTips = [
    "Keep your mouse sensitivity consistent.",
    "Keep your graphics settings optimized.",
    "Use a mousepad that gives you enough space."
];

const tips = gamingTips.filter((tip) => tip.length > 20);

const player = {
    name: "FPS Player",
    favoriteGame: "FPS",
    tips: tips
};

const main = document.querySelector("main");

const message = document.createElement("p");
message.textContent = `Welcome to Gaming Zone, ${player.name}!`;
main.appendChild(message);

let visits = Number(localStorage.getItem("visits")) || 0;
visits++;

localStorage.setItem("visits", visits);

const visitMessage = document.createElement("p");

if (visits === 1) {
    visitMessage.textContent = `Welcome! This is your first visit to Gaming Zone.`;
} else {
    visitMessage.textContent = `Welcome back! You have visited Gaming Zone ${visits} times.`;
}

main.appendChild(visitMessage);

const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        button.textContent = `Loading...`;
    });
});