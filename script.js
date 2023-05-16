

var faf = document.querySelector(".navbar-toggler");
var blurr = document.querySelector(".blur");
var form = document.querySelector(".formcont")
var formm = document.querySelector(".form-cont")
var remove = document.querySelector(".bg-blur")
var removee = document.querySelector(".bg-blurr")
faf.addEventListener("click", ()=>{
    faf.querySelector("i").classList.toggle("fa-bars");
    faf.querySelector("i").classList.toggle("fa-times");

})
function openn(){
    form.style.display = ("initial")
    remove.style.display =("initial")
    }

function opennn(){
    removee.style.display =("initial")
    formm.style.display = ("initial")
    document.querySelector(".navbar-collapse").classList.remove("show");
    faf.querySelector("i").classList.toggle("fa-bars");
    faf.querySelector("i").classList.toggle("fa-times");
    


    }


    remove.addEventListener("click", ()=>{
        form.style.display = ("none")
        remove.style.display =("none")
        
    })
    removee.addEventListener("click", ()=>{
        formm.style.display = ("none")
        removee.style.display =("none")
        
    })



var log =document.getElementById("log");
var reg =document.getElementById("reg");
var indicator = document.getElementById("indicator");
    var logg =document.getElementById("logg");
var regg =document.getElementById("regg");
var indicatorr = document.getElementById("indicatorr");






function register(){
    reg.style.transform = "translateX(0px)"
    log.style.transform = "translateX(0px)"
    indicator.style.transform = "translateX(100px)"
}
function login(){
    reg.style.transform = "translateX(400px)"
    log.style.transform = "translateX(400px)"
    indicator.style.transform = "translateX(00px)"
}


function registerr(){
    regg.style.transform = "translateX(0px)"
    logg.style.transform = "translateX(0px)"
    indicatorr.style.transform = "translateX(100px)"
}
function loginn(){
    regg.style.transform = "translateX(300px)"
    logg.style.transform = "translateX(300px)"
    indicatorr.style.transform = "translateX(00px)"
};

var firstIndex=0;

function automaticSlide(){

setTimeout(automaticSlide, 2000); var pics;

const img=document.querySelectorAll('.auto-slide, .blog-img');

for(pics=0; pics<img.length;pics++){ img[pics].style.display="none";

}

firstIndex++;

if(firstIndex > img.length) { firstIndex =1;

}

img[firstIndex -1].style.display="block";

} automaticSlide();
