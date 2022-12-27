

//Personagem.
let character = document.getElementById("character")

//Váriavel Posição.
let positionX = 60

//Váriaveis usadas para fazer a troca de imagem.
let floorRight = 1
let floorLeft = 1


//Ao pressionar uma tecla o evento será acionando e verificará qual tecla foi acionada.
addEventListener("keydown", (e)=>{


    //Condição a tecla pressionada é igual a seta para esquerda e se a posição do personagem é maior que 10.
    if(e.key === "ArrowLeft" && positionX > 10){

        //Controle da posição, movendo a posição do personagem para esquerda.
        let x = positionX - 10
        positionX = x
        character.style.left=`${x}px`

        //Condição se a váriavel for igual 1 a primeira imagem do personagem andando irá substituir a imagem antiga.
        //Se for igual a 2 a segunda imagem do personagem andando irá substituir a primeira imagem.
        if(floorLeft === 1){
            character.setAttribute("src", "../../imgs/characters/characterLeft1.png")
            floorLeft = 2
        }else if(floorLeft === 2){
            character.setAttribute("src", "../../imgs/characters/characterLeft2.png")
            floorLeft = 1
        }
    }

    //Condição se a váriavel for igual 1 a primeira imagem do personagem andando irá substituir a imagem antiga.
    //Se for igual a 2 a segunda imagem do personagem andando irá substituir a primeira imagem.
    if(e.key === "ArrowRight" && positionX < 750){
        let x = positionX + 10
        positionX = x
        character.style.left=`${x}px`
        if(floorRight === 1){
            character.setAttribute("src", "../../imgs/characters/characterRight1.png")
            floorRight = 2
        }else if(floorRight === 2){
            character.setAttribute("src", "../../imgs/characters/characterRight2.png")
            floorRight = 1
        }
    }
  
})

//Ao soltar a tecla será acionado um evento que indentifica qual lado da tecla foi solto se foi a tecla seta esquerda ou a tecla seta direita.

addEventListener("keyup", (e)=>{

   //Verifica qual tecla foi solta e substitui a imagem antiga para um gif do personagem.
   if(e.key === "ArrowLeft"){
        character.setAttribute("src", "../../imgs/characters/characterAnimationLeft.gif")
    }
    if(e.key === "ArrowRight"){
        character.setAttribute("src", "../../imgs/characters/characterAnimationRight.gif")
   }

})

