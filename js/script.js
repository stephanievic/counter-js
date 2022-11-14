// passando valor incial para o contador
let count = 0;

//pegaando o #value e os botões 
let value = document.querySelector ("#value");
const btns = document.querySelectorAll (".btn"); 

//usando forEach para pegar os botões separadamente
btns.forEach (function (btn){

    btn.addEventListener ("click", (e) => {

        //const styles recebe a classe do botão quando ele é clicado
        const styles = e.currentTarget.classList;

        //verficações
        if (styles.contains('reset')){
            count = 0;

            value.style.color = "#251818";
        }

        else if (styles.contains('decrease')){
            count --;

            if (count < 0){
                value.style.color = "#8f2d2d";
            }

        }

        else if (styles.contains('increase')){
            count++;

            if (count >= 1){
                value.style.color = "#437052";
            }
           
        }

        value.textContent = count;
    })
})