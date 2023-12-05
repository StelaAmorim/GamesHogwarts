function imagens(numero) {
    id = numero + 1;


    fetch("http://localhost:3000/personagens")
    .then(response => {
        return response.json()
    }).then(personagensJson => {
        console.log(personagensJson)

        document.getElementById("conteudo").innerHTML = ""
        
    
            document.getElementById("conteudo").innerHTML =
                "<fieldset><img src='" + personagensJson[numero].imagem + "' >" +
                "<div><b>Nome: </b>" + personagensJson[numero].nome + "<br>" +
                "<b>Casa: </b>" + personagensJson[numero].casa + "<br>" +
                "<b>Descricão: </b>" + personagensJson[numero].descricao + "</div></fieldset>"

    })
}