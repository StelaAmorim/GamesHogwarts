function Troca(){
    palavra_digitada= document.getElementById("palavra").value
    
    document.getElementById("palavra_1").innerHTML = palavra_digitada
    document.getElementById("palavra_2").innerHTML = palavra_digitada
    document.getElementById("palavra_3").innerHTML = palavra_digitada
    document.getElementById("palavra_4").innerHTML = palavra_digitada
    document.getElementById("palavra_5").innerHTML = palavra_digitada
}

function Resetar(){
    document.getElementById("palavra_1").innerHTML = "Nemo"
    document.getElementById("palavra_2").innerHTML = "Segredo"
    document.getElementById("palavra_3").innerHTML = "Mágico"
    document.getElementById("palavra_4").innerHTML = "Planeta"
    document.getElementById("palavra_5").innerHTML = "Rush"
}