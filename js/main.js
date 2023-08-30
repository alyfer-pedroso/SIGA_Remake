(() => {
    const body = document.querySelector("body");
    const $mainAluno = document.querySelector(".mainAluno");
    const footerButtons = document.querySelectorAll(".footerAluno button");
    const $hamburguerMenu = document.querySelector(".aluno-hamburguerMenu");
    const exitButton = document.getElementById("exit");

    footerButtons[0].addEventListener("click", () => {
        $hamburguerMenu.classList.remove("opened");
        $mainAluno.classList.remove("MENU");
        $mainAluno.classList.add("HOME");
    });
    footerButtons[1].addEventListener("click", () => {
        $hamburguerMenu.classList.toggle("opened");
        $mainAluno.classList.toggle("MENU");
        $mainAluno.classList.toggle("HOME");
    });

    exitButton.addEventListener("click", () => {
        localStorage.clear();
        open("../index.html", "_self");
    });

    //Verficando a opção que o usuário está
    const verifyMain = setInterval(() => {
        switch ($mainAluno.className) {
            case "mainAluno HOME": {
                footerButtons[1].classList.remove("markedBTN");
                footerButtons[0].classList.add("markedBTN");
                body.style.overflow = "visible";
                break;
            }

            case "mainAluno MENU": {
                footerButtons[1].classList.add("markedBTN");
                footerButtons[0].classList.remove("markedBTN");
                body.style.overflow = "hidden";
                break;
            }

            default: {
                var i = 0;
                while (i < footerButtons.length) {
                    footerButtons[i].classList.remove("markedBTN");
                    i++;
                }
                break;
            }
        }
    }, 10);
})();
