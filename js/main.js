const nav = document.getElementById("nav")
window.onscroll = function (){
    if(document.documentElement.scrollTop > 200){
        nav.classList.add("navbar-scrolled")
    }else{
        nav.classList.remove("navbar-scrolled")
    }
}
// console.log(document.documentElement)

let navLink = document.querySelectorAll(".nav-link")
let navcollaps = document.querySelector(".navbar-collapse")
navLink.forEach((a) =>{
    a.addEventListener("click", (e) => {
        navcollaps.classList.remove("show")
    })
})