(() => {
    // DISPLAY
    const body = document.querySelector("body");
    const $mainAluno = document.querySelector(".mainAluno");
    const $mainAluno__displays = document.querySelectorAll(".display");

    // BTNS
    const footerButtons = document.querySelectorAll(".footerAluno button");
    const $hamburguerMenu = document.querySelector(".aluno-hamburguerMenu");
    const exitButton = document.getElementById("exit");
    const allOptBtn = document.querySelector(".optionsNav__btn");

    // OPT BTNS
    const $btn__vidaAcad = document.querySelectorAll(".OPT-VIDAACAD");
    const $btn__boletimES = document.querySelectorAll(".OPT-BOESC");
    const $btn__fichaInd = document.querySelectorAll(".OPT-FICHAIND");
    const $btn__fichaDes = document.querySelectorAll(".OPT-FICHADES");
    const $btn__progPar = document.querySelectorAll(".OPT-PROGPAR");
    const $btn__horarioCur = document.querySelectorAll(".OPT-HRCUR");
    const $btn__solicitDoc = document.querySelectorAll(".OPT-SOLIDOC");
    const $btn__aprovEs = document.querySelectorAll(".OPT-APROV");
    const $btn__emailIns = document.querySelectorAll(".OPT-EMAILINS");
    const $btn__rematric = document.querySelectorAll(".OPT-REMA");
    const $btn__comprovVac = document.querySelectorAll(".OPT-COMVAC");
    const $btn__reconsid = document.querySelectorAll(".OPT-RECO");
    const $btn__reclass = document.querySelectorAll(".OPT-RECLA");
    const $btn__attCad = document.querySelectorAll(".OPT-ATTC");

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

    window.addEventListener("dblclick", () => {
        document.querySelector("html").requestFullscreen();
    });

    if (isHome) {
        footerButtons.forEach((el) => {
            el.classList.remove("markedBTN");
        });
        $mainAluno__displays.forEach((el) => {
            el.style.display = "none";
        });
        $mainAluno__displays[0].style.display = "block";
        footerButtons[0].classList.add("markedBTN");
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

    //Adicionando a data atual nos elementos que exige isso
    const $dateElement = document.querySelectorAll(".date");
    let currentDate = new Date();
    let day = currentDate.getDate();
    let mounth = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();

    if (day < 10) {
        day = `0${day}`;
    }
    if (mounth < 10) {
        mounth = `0${mounth}`;
    }

    $dateElement.forEach((el) => {
        el.innerHTML = `${day}/${mounth}/${year}`;
    });

    // Funções das páginas
    function initPage() {
        scrollTo(0, 0);
        location.reload();
    }

    function goToPage() {
        $mainAluno__displays.forEach((el) => {
            el.style.display = "none";
        });
        footerButtons.forEach((el) => {
            el.classList.remove("markedBTN");
        });
        $hamburguerMenu.classList.remove("opened");
        isNotMenu = true;
        isHome = false;
        loaderPage();
        scrollTo(0, 0);
    }

    function accessDisplayOPT(displayIndex) {
        setTimeout(() => {
            goToPage();
            $mainAluno__displays[displayIndex].style.display = "block";
        }, 10);
    }

    // Adciocionando eventos nos botoes
    allOptBtn.addEventListener("click", () => {
        accessDisplayOPT(1);
    });
    $btn__vidaAcad.forEach((el) => {
        el.addEventListener("click", () => {
            accessDisplayOPT(2);
        });
    });
    $btn__boletimES.forEach((el) => {
        el.addEventListener("click", () => {
            accessDisplayOPT(3);
        });
    });
    $btn__fichaInd.forEach((el) => {
        el.addEventListener("click", () => {
            accessDisplayOPT(4);
        });
    });
    $btn__fichaDes.forEach((el) => {
        el.addEventListener("click", () => {
            accessDisplayOPT(5);
        });
    });
    $btn__progPar.forEach((el) => {
        el.addEventListener("click", () => {
            accessDisplayOPT(6);
        });
    });
    $btn__horarioCur.forEach((el) => {
        el.addEventListener("click", () => {
            accessDisplayOPT(7);
        });
    });
    $btn__solicitDoc.forEach((el) => {
        el.addEventListener("click", () => {
            accessDisplayOPT(8);
        });
    });
    $btn__aprovEs.forEach((el) => {
        el.addEventListener("click", () => {
            accessDisplayOPT(9);
        });
    });

    footerButtons[0].addEventListener("click", () => {
        if (isNotMenu) {
            initPage();
            scrollTo(0, 0);
        } else {
            if ($hamburguerMenu.classList == "aluno-hamburguerMenu opened") {
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
            body.style.overflow = "hidden";
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
