export default function initMenuMobile(){
   const menuMobile = document.querySelector('.menu-mobile');
   const listUL = document.querySelector(".lista_header");
  function clickMenuMobile(){
    listUL.classList.toggle("ativo")
    menuMobile.classList.toggle("ativo")
  }
  menuMobile.addEventListener('click', clickMenuMobile)
    // function clickOutside(el, callback){
    //     const html = document.documentElement;

    // }
}