window.onscroll = function(){
    let scroll = document.documentElement.scrollTop;
    let header = document.getElementById("header");
    if(scroll > 20){
        header.classList.add("nav_mod");
    }else if(scroll < 20){
        header.classList.remove("nav_mod");
    }
}
let menu = document.getElementById("header");
let nav = document.getElementById("nav");
let body = document.getElementById("container_all");
const mostrar_menu = () =>{
    body.classList.toggle("move_content");
    menu.classList.toggle("move_content");
    nav.classList.toggle("move_nav");
}
const ocultar_menu = () =>{
    if(window.innerWidth > 760){
        body.classList.remove("move_content");
        menu.classList.remove("move_content");
        nav.classList.remove("move_nav");
    }
}
document.getElementById("btn_menu").addEventListener("click", mostrar_menu);
window.addEventListener("resize", ocultar_menu);
