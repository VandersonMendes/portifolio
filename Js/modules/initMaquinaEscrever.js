export default function initMaquinaEscrever(){
    const text = document.querySelector('[data-anime="maquinaEscrever"]');
    function typeWrite(element){
        const textArray = element.innerHTML.split('');
        element.innerHTML = ' ';
        textArray.forEach((letra, i) => {
            setTimeout(function(){
                element.innerHTML += letra
            }, 120 * i)
        });
    }
    setTimeout(()=>{
        typeWrite(text)
    },2000)
}