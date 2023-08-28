(() => {
    const $contentWarning = document.querySelector(".contentWarning");
    const $loading = document.querySelector(".loading");
    const $login = document.querySelector(".login");
    const $confirmBTN = document.querySelector(".btnConfirm");
    const $schoolLabel = document.querySelector(".login label:nth-child(4)");

    const $selecType = document.getElementById("selecType");

    let changeToLoading = () => {
        let $selecTypeValue = $selecType.value;

        if ($selecTypeValue == "null") {
            alert("Por favor, selecione uma opção ");
        } else if ($selecTypeValue == "student" || $selecTypeValue == "responsible") {
            $schoolLabel.style.display = "none";
            $loading.style.opacity = 0;
            $confirmBTN.removeEventListener("click", changeToLoading);
            setTimeout(() => {
                $loading.style.display = "flex";
                $contentWarning.style.opacity = 0;
                setTimeout(() => {
                    $loading.style.opacity = 1;
                    $contentWarning.style.display = "none";
                    setTimeout(() => {
                        $loading.style.opacity = 0;
                        $login.style.display = "flex";
                        setTimeout(() => {
                            $login.style.opacity = 1;
                            $loading.style.display = "none";
                        }, 1000);
                    }, 3000);
                }, 1000);
            }, 10);
        } else {
            $loading.style.opacity = 0;
            $confirmBTN.removeEventListener("click", changeToLoading);
            setTimeout(() => {
                $loading.style.display = "flex";
                $contentWarning.style.opacity = 0;
                setTimeout(() => {
                    $loading.style.opacity = 1;
                    $contentWarning.style.display = "none";
                    setTimeout(() => {
                        $loading.style.opacity = 0;
                        $login.style.display = "flex";
                        setTimeout(() => {
                            $login.style.opacity = 1;
                            $loading.style.display = "none";
                        }, 1000);
                    }, 3000);
                }, 1000);
            }, 10);
        }
    };
    $confirmBTN.addEventListener("click", changeToLoading);
})();
