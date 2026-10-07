const form = document.querySelector("#sensitivity-form");
const result = document.querySelector("#result");

if (form) {
    form.addEventListener("submit", calculateEdpi);
}

function calculateEdpi(event) {
    event.preventDefault();

    const dpi = Number(document.querySelector("#dpi").value);
    const sensitivity = Number(document.querySelector("#sensitivity").value);

    const edpi = dpi * sensitivity;

    if (edpi > 1000) {
        result.textContent = `Your eDPI is ${edpi}. This is a high sensitivity.`;
    } else {
        result.textContent = `Your eDPI is ${edpi}. This is a lower sensitivity.`;
    }

    localStorage.setItem("edpi", edpi);
}