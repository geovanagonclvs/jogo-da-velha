    // variáveis que NÃO podem ser apagadas depois da jogada
    
    let tabuleiro=[]
    const jogador1=1
    const jogador2=2
    

    // função responsável por criar o tabuleiro lógico sempre que a página for carregada
function iniciar(){ 

    //
    
    
    for(let i=0 ; i<3 ; i++){
        tabuleiro[i]=[]
        for (let j=0 ;j<3 ; j++ )
            tabuleiro[i][j]=0
        
    }

    console.log("Tabuleiro Pronto")
    
 exibir()
    
}


// função responsável por criar a tabela com os valores que o jogador 1 escolheu
function jogada1(){
     let linhaEscolhida  = document.getElementById('inputLinha').value - 1
     let colunaEscolhida = document.getElementById('inputColuna').value - 1


    // parte que interropemos a jogada do jogador 1 caso a linha e coluna já estejam preenchidas


   if (linhaEscolhida <0 || linhaEscolhida >2 || colunaEscolhida <0 || colunaEscolhida >2 ){

   
    alert("Jogada Inválida! Coluna ou Linha não existem") 
   return;
  } 

    if(tabuleiro[linhaEscolhida][colunaEscolhida]==0){

        
        tabuleiro [linhaEscolhida][colunaEscolhida] = jogador1
    } else{
        alert("Jogada Inválida! A casa já está preenchida")
    }

     console.log(tabuleiro)


     exibir()
     jogada2()
     verificarGanhador()
     
     
     
     }

    

     function definicaoJogada(){
         
         const vezDoJogador=1

         
         // se a vezDoJogador=1, significa que a próxima jogada é o 2
         
         if (vezDoJogador==1){
             
             tabuleiro [linhaEscolhida][colunaEscolhida] = jogador1
             vezDoJogador = 2
             
             //Se não, o tabuleiro  será do jogador 2 e a próxima jogada é o do jogador 2
             
            } else {
                
                
                tabuleiro [linhaEscolhida][colunaEscolhida] = jogador2
                vezDoJogador = 1
            }
        }

        
     

 // função responsável por criar a tabela com os valores que o computador/jogador 2 escolheu

     function jogada2(){

        let linhaEscolhida = Math.random()*tabuleiro.length
        let colunaEscolhida = Math.random()*tabuleiro.length

        let numeroInteiroLinha = Math.floor(linhaEscolhida)
        let numeroInteiroColuna = Math.floor(colunaEscolhida)

        while(tabuleiro[numeroInteiroLinha][numeroInteiroColuna] !==0){
            numeroInteiroLinha = Math.floor(Math.random()*length)
            numeroInteiroColuna = Math.floor(Math.random()*length)

        }

        tabuleiro[numeroInteiroLinha][numeroInteiroColuna] = jogador2

    
        exibir()
        verificarGanhador()
        definicaoJogada()

        
     }


     //exibição visual


     function verificarGanhador(){

        
        
         for(let i=0 ; i<3 ; i++)
            { if(tabuleiro[i][0] !==0 && tabuleiro[i][1] && tabuleiro[i][1] == tabuleiro [i][2]){
                alert("Parabéns!Você ganhou")
            }
        }
        for(let j=0; j<3 ; j++){

            if(tabuleiro[0][j] !== 0 &&  tabuleiro[1][j] && tabuleiro[1][j] == tabuleiro[2][j])
                
                {
                    alert("Parabéns!Você ganhou")
                }
                
            }

           
            
            
            if(
                tabuleiro[0][0] !== 0 && tabuleiro[1][1] && tabuleiro[1][1] == tabuleiro[2][2]
            ){
                alert("Parabéns!Você ganhou")
            }
            
            if(tabuleiro[0][2] !== 0 &&tabuleiro[1][1] && tabuleiro[1][1] == tabuleiro[2][0]){
                alert("Parabéns!Você ganhou")
            }
            
        }
        
        
    
     function exibir(){
         let tabela = '<table cellpadding ="10" border="1">'
         let board= document.getElementById("board")

    // loop externo cria a linha
    for (let i=0; i<3; i++){
         tabela += '<tr>'

         // define de quem será o X ou O

         //loop interno "povoa" essa linha com células

         for (let j = 0; j < 3 ; j++){
            let marcador='';

            switch(tabuleiro[i][j]){
                case 1: marcador = 'X'; break;
                case 2: marcador = 'O'; break;
                default: marcador = '_';
            }

        tabela += '<td>' + marcador + '</td>';
        }

        tabela += '</tr>'

    }
   
    
    
    tabela += '</table>'


    
    board.innerHTML=tabela

        

     }

    
    
     
    


