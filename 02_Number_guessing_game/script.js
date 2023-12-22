const button = document.querySelector("button");
const container = document.querySelector(".container");
const counter = document.querySelector(".counter");
const lastPunct = document.querySelector(".lastPunct");
const randomNumber = Math.floor(Math.random() * 100) + 1;
let numberCheck = 1;


button.addEventListener("click", function (event) {
    event.preventDefault();
    const input = Number(document.querySelector("input").value);
    if (input == 0) {
        container.innerHTML = "";
    } else {
        if (randomNumber == input && numberCheck <= 10) {
            container.innerHTML = "";
            container.insertAdjacentHTML("beforeend", `<div class="result"><p>Вы победили!</p></div>`);
        } else if (randomNumber > input && numberCheck <= 10) {
            container.innerHTML = "";
            container.insertAdjacentHTML("beforeend", `<div class="test"><p>Вы близки! Увеличте число</p></div>`);
            counter.innerHTML = "";
            counter.insertAdjacentHTML("beforeend", `<p class="counterP">Количество попыток: ${(10 - numberCheck)}</p>`);
            lastPunct.insertAdjacentHTML("beforeend", `${input} `);
            numberCheck++;
        } else if (randomNumber < input && numberCheck <= 10) {
            container.innerHTML = "";
            container.insertAdjacentHTML("beforeend", `<div class="test"><p>Вы близки! Уменьшите число</p></div>`);
            counter.innerHTML = "";
            counter.insertAdjacentHTML("beforeend", `<p class="counterP">Количество попыток: ${(10 - numberCheck)}</p>`);
            lastPunct.insertAdjacentHTML("beforeend", `${input} `);
            numberCheck++;
        } else if (numberCheck >= 11) {
            container.innerHTML = "";
            container.insertAdjacentHTML("beforeend", `<div class="fall"><p>Вы проиграли!</p></div>`);
        }
    }
})
