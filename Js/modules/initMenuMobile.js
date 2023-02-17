export default function InitDomClassList(){
    const menuMobile = document.querySelector(".menuMobile");
    const listHeader = document.querySelector(".lista_header");   
    menuMobile.addEventListener("click", ()=> listHeader.classList.toggle("ativo"));

    // const verMais = document.querySelector(".verMais");
    // const ProjetosHiden = document.querySelector(".projetosEmbreve")
    // verMais.addEventListener('click', ()=>{
    //     ProjetosHiden.classList.add("ativo")
    // })
}