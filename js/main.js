toLoginPage = () => {
    const $loading = document.querySelector(".loading");
    const $content = document.querySelector(".content");

    setTimeout(() => {
        $content.style.display = "flex";
        $loading.style.opacity = 0;
        setTimeout(() => {
            $loading.style.display = "none";
        }, 1000);
    }, 6000);
};
toLoginPage();
