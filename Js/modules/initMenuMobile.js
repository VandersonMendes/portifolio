export default function initMenuMobile(){
    const menuMobile = document.querySelector(".menuMobile");
    const listHeader = document.querySelector(".lista_header");   
    menuMobile.addEventListener("click", ()=> listHeader.classList.toggle("ativo"));
}