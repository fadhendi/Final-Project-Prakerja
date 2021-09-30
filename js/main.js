window.addEventListener("scroll", function(){
    var header = document.querySelector("nav");
    header.classList.toggle("sticky-top", window.scrollY > 0);
})