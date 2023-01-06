
let menuBars = document.querySelector(".fa-bars")
let checked = document.querySelector(".checkbox")
let responsive = document.querySelector("#navbar__menu")


checked.addEventListener("click", ()=>{
    console.log("first")
    if(responsive.className == "navbar__menu"){
        responsive.className += " responsive"
    }else{
        responsive.className = "navbar__menu"
    }
})