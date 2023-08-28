(() => {
    const $mainAluno = document.querySelector(".mainAluno");
    const footerButtons = document.querySelectorAll(".footerAluno button");

    //Verficando a opção que o usuário está
    if ($mainAluno) {
        const verifyMain = setInterval(() => {
            switch ($mainAluno.className) {
                case "mainAluno HOME": {
                    footerButtons[0].classList.add("markedBTN");
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
    }
})();
