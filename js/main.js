(() => {
    const body = document.querySelector("body");
    const $mainAluno = document.querySelector(".mainAluno");
    const $mainAluno__home = document.getElementById("mainAluno__home");
    const $mainAluno__allOtp = document.getElementById("mainAluno__allOtp");

    // BTNS
    const footerButtons = document.querySelectorAll(".footerAluno button");
    const $hamburguerMenu = document.querySelector(".aluno-hamburguerMenu");
    const exitButton = document.getElementById("exit");
    const allOptBtn = document.querySelector(".optionsNav__btn");

    let isNotMenu = false;
    let isHome = true;

    // Page pre-load
    window.addEventListener("load", () => {
        const loader = document.querySelector(".loading-loader");
        loader.classList.add("lAluno-hidden");
        loader.addEventListener("transitionend", () => {
            loader.remove();
        });
    });

    if (isHome) {
        footerButtons.forEach((el) => {
            el.classList.remove("markedBTN");
        });
        footerButtons[0].classList.add("markedBTN");
        $mainAluno__allOtp.style.display = "none";
    }

    function loaderPage() {
        loader = document.createElement("div");
        loader.classList = "loading-loader lAluno";
        body.appendChild(loader);
        setTimeout(() => {
            loader.classList.add("lAluno-hidden");
        }, 75);
        loader.addEventListener("transitionend", () => {
            loader.remove();
        });
    }

    // Funções das páginas
    function initPage() {
        location.reload();
    }

    function accessAllOptions() {
        $mainAluno__home.style.display = "none";
        $mainAluno__allOtp.style.display = "block";
        $hamburguerMenu.classList.remove("opened");
        footerButtons.forEach((el) => {
            el.classList.remove("markedBTN");
        });
        isNotMenu = !isNotMenu;
        isHome = false;
        loaderPage();
        scrollTo(0, 0);
    }

    // Adciocionando eventos nos botoes
    allOptBtn.addEventListener("click", accessAllOptions);

    footerButtons[0].addEventListener("click", () => {
        if (isNotMenu) {
            initPage();
            scrollTo(0, 0);
        } else {
            if ($hamburguerMenu.classList == "aluno-hamburguerMenu opened") {
                footerButtons[0].classList.add("markedBTN");
                footerButtons.forEach((el) => {
                    el.classList.remove("markedBTN");
                });
                body.style.overflow = "visible";
            }
            $hamburguerMenu.classList.remove("opened");
            footerButtons[0].classList.add("markedBTN");
        }
    });

    footerButtons[1].addEventListener("click", () => {
        $hamburguerMenu.classList.toggle("opened");
        if ($hamburguerMenu.classList == "aluno-hamburguerMenu opened") {
            footerButtons.forEach((el) => {
                el.classList.remove("markedBTN");
            });
            footerButtons[1].classList.add("markedBTN");
        } else {
            footerButtons.forEach((el) => {
                el.classList.remove("markedBTN");
            });
            if (isHome) {
                footerButtons.forEach((el) => {
                    el.classList.remove("markedBTN");
                });
                footerButtons[0].classList.add("markedBTN");
            }
            body.style.overflow = "visible";
        }
    });

    exitButton.addEventListener("click", () => {
        localStorage.clear();
        open("../index.html", "_self");
    });
})();
