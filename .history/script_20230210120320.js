
var header = document.querySelector("header");
var sticky = header.offsetTop;
window.onscroll = function () {
    if (window.pageYOffset > sticky) {
        header.style.backgroundColor = "#0a1d38";
        header.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
        header.style.padding = "10px";
        header.style.width = "100%";
        header.style.position = "fixed";
        header.style.top = "0";
    } else {
        header.style.backgroundColor = "transparent";
        header.style.boxShadow = "none";
        header.style.padding = "20px";
        header.style.position = "relative";
    }
};
