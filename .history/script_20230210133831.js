
var header = document.querySelector("header");
var sticky = header.offsetTop;
function myFunction(){
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky")
    } else {
        header.classList.remove("sticky");
    }
};


    const btn = document.querySelector("#btn");
    const text = document.querySelector("#text");

    btn.addEventListener("click", function () {
      if (text.innerHTML === "This page is written in English.") {
        text.innerHTML = "Cette page est écrite en français.";
    document.querySelector("html").setAttribute("lang", "fr");
      } else {
        text.innerHTML = "This page is written in English.";
    document.querySelector("html").setAttribute("lang", "en");
      }
    });
