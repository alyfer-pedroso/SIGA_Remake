(() => {
    if (screen.width >= 1024) {
        const body = document.body,
            scrollWrap = document.querySelector(".mainAluno"),
            height = scrollWrap.getBoundingClientRect().height - 1,
            speed = 0.04;

        let offset = 0;

        // body.style.minHeight = Math.floor(height) + "px";

        function smoothScroll() {
            offset += (window.scrollY - offset) * speed;
            let scroll = `translateY(-${offset}px) translateZ(0)`;
            scrollWrap.style.transform = scroll;
            callScroll = requestAnimationFrame(smoothScroll);
        }
        smoothScroll();
    }
})();
