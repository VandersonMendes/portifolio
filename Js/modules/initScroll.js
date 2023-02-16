
export default function initScroll(){
    const sections = document.querySelectorAll('[data-anime="scroll"]');
    if(sections){
        const janelaMetade = window.innerHeight * 0.5;
        function animarScroll(){
            sections.forEach((item) =>{
                const sectionTop = item.getBoundingClientRect().top - janelaMetade;
                if(sectionTop < 0){
                    item.classList.add("ativo")
                }else if(item.classList.contains("ativo")){
                    item.classList.remove("ativo");
                }
            })
        }
        animarScroll();
        window.addEventListener("scroll", initScroll)
    }
}