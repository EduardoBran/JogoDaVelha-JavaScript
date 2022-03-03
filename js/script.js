let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector(("#message p"));
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

        //verifica se ja tem 'x' ou 'o'
        if(this.childNodes.length == 0){ 

            let cloneElemento = elemento.cloneNode(true); //precisa clonar para podermos aproveita-lo depois
            this.appendChild(cloneElemento); //adiciona o elemento dentro da caixa 
    
            //computar jogada
            if(player1 == player2){
                player1++;

                if(secondPlayer == 'btnIAPlayer'){

                    //função para executar a jogada
                    computerPlay();
                    player2++;
                }
            }
            else{
                player2++;
            }
            //checa quem venceu
            checkWinCondition();
        }
    });    
}

//evento para saber se é 2 players ou IA
for (let i = 0; i < buttons.length; i++) { 

    buttons[i].addEventListener("click", function() { //pegando cada botão e adicionando ao evento listener
        
        secondPlayer = this.getAttribute("id"); //pegando o ID do botão clicado

        for (let j = 0; j < buttons.length; j++) { //escondendo os botões
            buttons[j].style.display = 'none';            
        }

        setTimeout(function() { //aparece o tabuleiro após o click do botão

            let container = document.querySelector("#container");
            container.classList.remove("hide");

        }, 500);

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
//ver quem ganhou
function checkWinCondition() {

    let b1 = document.getElementById("block-1");
    let b2 = document.getElementById("block-2");
    let b3 = document.getElementById("block-3");
    let b4 = document.getElementById("block-4");
    let b5 = document.getElementById("block-5");
    let b6 = document.getElementById("block-6");
    let b7 = document.getElementById("block-7");
    let b8 = document.getElementById("block-8");
    let b9 = document.getElementById("block-9");

    //condição para vitoria (horizontal)
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0 ){

        let b1Child = b1.childNodes[0].className; //pegou a classe
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if(b1Child == 'x' && b2Child == 'x' && b3Child == 'x'){
             
            //x venceu
            declareWinner('x');
        }
        else if(b1Child == 'o' && b2Child == 'o' && b3Child == 'o'){

            //o venceu
            declareWinner('o');
        }
    }
    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0 ){

        let b4Child = b4.childNodes[0].className; //pegou a classe
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        if(b4Child == 'x' && b5Child == 'x' && b6Child == 'x'){
             
            //x venceu
            declareWinner('x');
        }
        else if(b4Child == 'o' && b5Child == 'o' && b6Child == 'o'){

            //o venceu
            declareWinner('o');
        }
    }
    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0 ){

        let b7Child = b7.childNodes[0].className; //pegou a classe
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b7Child == 'x' && b8Child == 'x' && b9Child == 'x'){
             
            //x venceu
            declareWinner('x');
        }
        else if(b7Child == 'o' && b8Child == 'o' && b9Child == 'o'){

            //o venceu
            declareWinner('o');
        }
    }
    
    //condição para vitoria (vertical)
    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0 ){

        let b1Child = b1.childNodes[0].className; //pegou a classe
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;
    
        if(b1Child == 'x' && b4Child == 'x' && b7Child == 'x'){
                 
            //x venceu
            declareWinner('x');
        }
        else if(b1Child == 'o' && b4Child == 'o' && b7Child == 'o'){
    
            //o venceu
            declareWinner('o');
        }
    }
    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0 ){

        let b2Child = b2.childNodes[0].className; //pegou a classe
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
    
        if(b2Child == 'x' && b5Child == 'x' && b8Child == 'x'){
                 
            //x venceu
            declareWinner('x');
        }
        else if(b2Child == 'o' && b5Child == 'o' && b8Child == 'o'){
    
            //o venceu
            declareWinner('o');
        }
    }
    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0 ){

        let b3Child = b3.childNodes[0].className; //pegou a classe
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;
    
        if(b3Child == 'x' && b6Child == 'x' && b9Child == 'x'){
                 
            //x venceu
            declareWinner('x');
        }
        else if(b3Child == 'o' && b6Child == 'o' && b9Child == 'o'){
    
            //o venceu
            declareWinner('o');
        }
    }

    //condição para vitoria (diagonal)
    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0 ){

        let b1Child = b1.childNodes[0].className; //pegou a classe
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;
    
        if(b1Child == 'x' && b5Child == 'x' && b9Child == 'x'){
                 
            //x venceu
            declareWinner('x');
        }
        else if(b1Child == 'o' && b5Child == 'o' && b9Child == 'o'){
    
            //o venceu
            declareWinner('o');
        }
    }
    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0 ){

        let b3Child = b3.childNodes[0].className; //pegou a classe
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;
    
        if(b3Child == 'x' && b5Child == 'x' && b7Child == 'x'){
                 
            //x venceu
            declareWinner('x');
        }
        else if(b3Child == 'o' && b5Child == 'o' && b7Child == 'o'){
    
            //o venceu
            declareWinner('o');
        }
    }

    //deu velha
    let counter = 0;

    for (let i = 0; i < boxes.length; i++) {
        
        if(boxes[i].childNodes[0] != undefined) {
            counter++;
        }        
    }
    if(counter == 9) {
        declareWinner("Deu velha!");
    }    
}

//limpa o jogo, declara o vencedor e atualiza o placar
function declareWinner(winner) {

    let scoreBoardX = document.querySelector("#scoreboard-1");
    let scoreBoardY = document.querySelector("#scoreboard-2");
    let msg = '';

    if(winner == 'x'){

        scoreBoardX.textContent = parseInt(scoreBoardX.textContent) + 1;
        msg = "O jogador 1 venceu!";
    }
    else if(winner == 'o' && secondPlayer == 'btnIAPlayer'){

        scoreBoardY.textContent = parseInt(scoreBoardY.textContent) + 1;
        msg = "A IA venceu!";
    }
    else if(winner == 'o'){

        scoreBoardY.textContent = parseInt(scoreBoardY.textContent) + 1;
        msg = "O jogador 2 venceu!";
    }
    else{
        msg = "Deu velha!";
    }

    //exibe a msg
    messageText.innerHTML = msg;
    messageContainer.classList.remove("hide");

    //esconde msg
    setTimeout(function() {
        messageContainer.classList.add("hide");
    }, 3000)

    //zerar as jogadas
    player1 = 0;
    player2 = 0;

    //removendo todos os 'x' e 'o' do tabuleiro
    let boxesToRemove = document.querySelectorAll(".box div");

    for (let i = 0; i < boxesToRemove.length; i++) {
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);        
    }
}

//executando a lógica da jogada do computador
function computerPlay() {

    let cloneO = o.cloneNode(true);
    contador = 0;
    preenchido = 0;

    for (let i = 0; i < boxes.length; i++) {
        
        let randomNumber = Math.floor(Math.random() * 5); //numero aleatório de 0 a 5 
        
        // só preenche se o filho estiver vazio
        if(boxes[i].childNodes[0] == undefined) { //verificar se ja tem alguma box preenchida p/ nao preencher de novo
            if(randomNumber <= 1) { //condição para aumentar a aleatoriedade
                boxes[i].appendChild(cloneO);
                contador++;
                break;
            }
        }
        else{
            preenchido++; //checagem para ver quantas estão preenchidas
        }
    }
    if(contador == 0 && preenchido < 9){
        computerPlay(); //chamando a função novamente (recursivamente)
    }
};