
var header = document.querySelector("header");
var sticky = header.offsetTop;
window.onscroll = function () {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky")
    } else {
        header.style.backgroundColor = "transparent";
        header.style.boxShadow = "none";
        header.style.padding = "20px";
        header.style.position = "relative";
    }
};
