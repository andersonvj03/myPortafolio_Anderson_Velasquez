const elements = document.getElementsByClassName("encabezadoport-nav");
const toggle = document.getElementById("toggle");
const mostrar = true;

toggle.addEventListener('click', ()=>{
     
        for (const element of elements) {
            if(element.style.display == 'none'){
                element.style.display = 'flex';
            }else{
                element.style.display = 'none';
            }          
          }
        
})

