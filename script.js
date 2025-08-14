let contador = 0

document.getElementById("clicker").addEventListener("click", function(){
    contador++;
    let mensagem = document.querySelector("#cliques");
    mensagem.textContent = `A quantidade de cliques que você deu foi ${contador}`

    if(contador == 100){
        alert("Você chegou aos 100 cliques, parabéns!!!")
    }
    else if( contador == 200){
        alert("Você chegou aos 200 cliques, parabéns!!!")
    }
    else if( contador == 300){
        alert("Você chegou aos 300 cliques, parabéns!!!")
    }
    else if( contador == 500){
        alert("Mano vai dormir cara")
    }
})
