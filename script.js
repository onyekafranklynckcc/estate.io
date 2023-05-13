

var faf = document.querySelector(".navbar-toggler");
var blurr = document.querySelector(".blur");
var form = document.querySelector(".formcont")
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
    }


    remove.addEventListener("click", ()=>{
        form.style.display = ("none")
        remove.style.display =("none")
        
    })
    removee.addEventListener("click", ()=>{
        
        removee.style.display =("none")
        
    })



    var log =document.getElementById("log")
var reg =document.getElementById("reg")
var indicator = document.getElementById("indicator")
    var logg =document.getElementById("logg")
var regg =document.getElementById("regg")
var indicatorr = document.getElementById("indicatorr")


function open(){
    form.style.display = "initial";
    }



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
}


