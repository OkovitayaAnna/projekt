var egg = document.getElementsByClassName("egg");
var egg1 = document.getElementsByClassName("egg1");
var egg2 = document.getElementsByClassName("egg2");
var egg3 = document.getElementsByClassName("egg3");
var klein = document.getElementsByClassName("klein");
var kroko = document.getElementsByClassName("kroko-img");

egg[0].addEventListener("click", function() {
    egg[0].style.display = "none";
    egg1[0].style.display = "block";
    egg1[0].addEventListener("click", function() {
        egg1[0].style.display = "none";
        egg2[0].style.display = "block";
        egg2[0].addEventListener("click", function() {
            egg2[0].style.display = "none";
            egg3[0].style.display = "block";
            egg3[0].style.marginTop = "25px";
            egg3[0].addEventListener("click", function() {
                egg3[0].style.display = "none";
                klein[0].style.display = "block";
                klein[0].style.marginTop = "25px";
                klein[0].addEventListener("click", function() {
                    klein[0].style.display = "none";
                    kroko[0].style.display = "block";
                });
            });
        });
    });
});