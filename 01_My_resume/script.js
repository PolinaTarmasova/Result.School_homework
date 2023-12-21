//Работа с кнопками в таблице
const aboutMyWorks = document.querySelectorAll(".aboutMyWorks");
const body = document.querySelector("body");

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");

const divOne = document.getElementById("divOne");
const divTwo = document.getElementById("divTwo");
const divThree = document.getElementById("divThree");

for (let i = 0; i < aboutMyWorks.length; i++) {
    aboutMyWorks[i].onclick = function () {
        switch (aboutMyWorks[i].id) {
            case "butOne":
                one.classList.add("modalWindowOne");
                divOne.classList.add("modalWindowOne__information");
                divOne.innerHTML =
                    `<p>
                Пордабатывала в своем учебном заведеннии в течении полугода, весной и на летних каникулах.
                За период подработки освоила такие навыки как: составление технических текстов; Ознакомилась
                с тонкостями в написании технической документации а так же привила себе навыки исполнительности
                и целеустремленности. Познакомилась с тем, как работает аппарат ИВЛ. Научилась описывать программы
                на языке программированя C++.
                <br></br>
                В случае необходимости рекомендаций прошу обратиться к директору колледжа "IT HUB" филлиала в
                Екатеринбурге.
                </p>
                <button class="modalButton">
                    <img src="img/x.svg">
                </button>
                `;
                two.classList.remove("modalWindowTwo");
                divTwo.classList.remove("modalWindowTwo__information");
                three.classList.remove("modalWindowThree");
                divThree.classList.remove("modalWindowThree__information");
                body.classList.add("bodyModal");
                break;
            case "butTwo":
                one.classList.remove("modalWindowOne");
                divOne.classList.remove("modalWindowOne__information");
                two.classList.add("modalWindowTwo");
                divTwo.classList.add("modalWindowTwo__information");
                divTwo.innerHTML =
                    `<p>
                Проработала в мастерской в течении года где в мои обязанности входило технически обслуживать мастерскую.
                Помогать на стадия производства посуды а также контролировать поставку материалов. На работе моим 
                главным преимуществом была безоговорочная страсть отдаться делу. А также дотошно выполнять все 
                поручения главного мастера.
                <br></br>
                В случае необходимости рекомендаций прошу обратиться к Марии О. в социальных сетях.
                </p>
                <button class="modalButton">
                    <img src="img/x.svg">
                </button>`;
                three.classList.remove("modalWindowThree");
                divThree.classList.remove("modalWindowThree__information");

                body.classList.add("bodyModal");
                break;
            case "butThree":
                one.classList.remove("modalWindowOne");
                divOne.classList.remove("modalWindowOne__information");
                two.classList.remove("modalWindowTwo");
                divTwo.classList.remove("modalWindowTwo__information");
                three.classList.add("modalWindowThree");
                divThree.classList.add("modalWindowThree__information");
                divThree.innerHTML =
                    `<p>
                Проработала в студии лечебной физкультуры где-то около года. За это время хорошо освоила коммуникацию с людьми, даже
                в конфликтных ситуациях. А также прокачала навыки быстрого погружения в тему и скоростного обучнеия так как эта 
                отрасль до момента поступления на работу не была мне знакома.
                </p>
                <button class="modalButton">
                    <img src="img/x.svg">
                </button>`;

                body.classList.add("bodyModal");
                break;
            default:
                one.classList.remove("modalWindowOne");
                divOne.classList.remove("modalWindowOne__information");
                two.classList.remove("modalWindowTwo");
                divTwo.classList.remove("modalWindowTwo__information");
                three.classList.remove("modalWindowThree");
                divThree.classList.remove("modalWindowThree__information");

                body.classList.remove("bodyModal");
                break;
        }
        const modalButton = document.querySelectorAll(".modalButton");
        for (let i = 0; i < modalButton.length; i++) {
            modalButton[i].onclick = function () {
                one.classList.remove("modalWindowOne");
                divOne.classList.remove("modalWindowOne__information");
                divOne.innerHTML = "";
                two.classList.remove("modalWindowTwo");
                divTwo.classList.remove("modalWindowTwo__information");
                divTwo.innerHTML = "";
                three.classList.remove("modalWindowThree");
                divThree.classList.remove("modalWindowThree__information");
                divThree.innerHTML = "";
                body.classList.remove("bodyModal");
            }
        }
    }
}

//Работа с кнопкой Обо мне
const buttonAboutMe = document.getElementById("buttonAboutMe");
const photo = document.querySelector(".modalWindowFour__photo");
const modalWindowFour = document.querySelector(".modalWindowFour");

buttonAboutMe.onclick = function () {
    modalWindowFour.removeAttribute("style");
    body.classList.add("bodyModal");
}

photo.onclick = function () {
    modalWindowFour.setAttribute("style", "display: none;");
    body.classList.remove("bodyModal");
}



