let timer; 

    timer = setInterval(moverClasse, 1000); 

    function pausarETemporizar() {
        clearInterval(timer); 
        setTimeout(timer, 50000); 
        timer = setInterval(moverClasse, 2000); 
    }

function moverClasse() {
    
    const divsTopo = document.querySelectorAll('.img')
    
    
    let divAtiva = document.querySelector('.img.active')
    
    if (divAtiva) {
        divsTopo.forEach(div => div.classList.remove('last'));

       
        divAtiva.classList.remove('active')
        divAtiva.classList.add('last');
        
        
        let proximaDiv = null;
        for (let i = 0; i < divsTopo.length; i++) {
            if (divsTopo[i] === divAtiva) {
                proximaDiv = divsTopo[(i + 1) % divsTopo.length];
                break
            }
        }

        if (proximaDiv.classList.contains('last')) {
            proximaDiv.classList.remove('last');
        }
        
        if (proximaDiv) {
            proximaDiv.classList.add('active')
        }
    }
}


function moverClasseEsquerda() {
    const divsTopo = document.querySelectorAll('.img');
    const divAtiva = document.querySelector('.img.active');

    if (divAtiva) {
        divsTopo.forEach(div => div.classList.remove('last'));

        divAtiva.classList.remove('active');
        divAtiva.classList.add('last');

        // Encontra a div anterior
        let divAnterior = null;
        for (let i = 0; i < divsTopo.length; i++) {
            if (divsTopo[i] === divAtiva) {
                divAnterior = divsTopo[(i - 1 + divsTopo.length) % divsTopo.length]; 
                break;
            }
        }

        if (divAnterior) {
            divAnterior.classList.add('active');
        }
    }
}