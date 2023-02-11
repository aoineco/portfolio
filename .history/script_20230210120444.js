
var header = document.querySelector("header");
var sticky = header.offsetTop;
myFunction(){
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky")
    } else {
        header.classList.remove("sticky");
    }
};
