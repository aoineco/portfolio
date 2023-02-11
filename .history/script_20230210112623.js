<script>
    window.onscroll = function() {
        var header = document.querySelector("header");
        if (window.pageYOffset > 50) {
        header.style.backgroundColor = "#0a1d38";
            header.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
            header.style.padding = "10px";
            header.style.position = "fixed";
            header.style.top = "0";
            header.style.width = "100%";
        }else {
            header.style.backgroundColor = "transparent";
            header.style.boxShadow = "none";
            header.style.padding = "20px";
            header.style.position = "relative";
        }
    };
</script>
