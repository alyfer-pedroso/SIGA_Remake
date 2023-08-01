(() => {
    const $contentWarning = document.querySelector(".contentWarning");
    const $loading = document.querySelector(".loading");
    const $confirmBTN = document.querySelector(".btnConfirm");

    const $selecType = document.getElementById("selecType");
    let $selecTypeOptions = $selecType.options;

    let changeToLoading = () => {
        $loading.style.opacity = 0;
        $confirmBTN.removeEventListener("click", changeToLoading);
        setTimeout(() => {
            $loading.style.display = "flex";
            $contentWarning.style.opacity = 0;
            setTimeout(() => {
                $loading.style.opacity = 1;
                $contentWarning.style.display = "none";
            }, 1000);
        }, 10);
    };
    $confirmBTN.addEventListener("click", changeToLoading);
})();
