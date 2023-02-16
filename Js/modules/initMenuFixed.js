export default function initMenuFixed(){
    const header = document.querySelector(".header");
    const menuContainer = document.querySelector(".menuContainer");
    if(header){
       if(header.getBoundingClientRect().y < 0){
        menuContainer.classList.add("active")
       }else{
        menuContainer.classList.remove("active")
       }
    }
    window.addEventListener("scroll", initMenuFixed)
}