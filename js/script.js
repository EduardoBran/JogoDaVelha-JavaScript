let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector(("message p"));
let secondPlayer;

//contador de jogadas (para saber quem vai jogar)
let player1 = 0;
let player2 = 0;

//adicionando o evento de click aos boxes
for (let i = 0; i < boxes.length; i++) {
    
    //quando clicar no box
    boxes[i].addEventListener("click", function() {

        //verificando quem vai jogar
        let elemento = checkElemento(player1, player2)

        //verifica se ja te 'x' ou 'o'
        if(this.childNodes.length == 0){ 

            let cloneElemento = elemento.cloneNode(true); //precisa clonar para podermos aproveita-lo depois
            this.appendChild(cloneElemento); //adiciona o elemento dentro da caixa 
    
            //computar jogada
            if(player1 == player2){
                player1++;
            }
            else{
                player2++;
            }
        }
    });    
}
//ver quem vai jogar
function checkElemento(player1, player2){
    
    if(player1 == player2) {
        //x
        elemento = x;
    }
    else{
        //o
        elemento = o;
    }
    return elemento;
}
