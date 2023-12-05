var p1 = 0;
var p2 = 0;
var p3 = 0;

var jogador1 = document.getElementById("p1")
var jogador2 = document.getElementById("p2")
var jogador3 = document.getElementById("p3")

function modal() {
    //Mostrando o modal do bootstrap
    var galleryModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
        keyboard: false
    });
    galleryModal.show();
}

function keyPressed(evt) {
    evt = evt || window.event;
    var key = evt.key
    console.log(key)
    return key
}
document.onkeypress = function (evt) {
    var tecla = keyPressed(evt);

    if (tecla == "w") {
        if (p1 == 1660) {
            Vitoria("Harry Potter")
            p1 = 0;
            p2 = 0;
            p3 = 0;
            jogador1.style.left = "0px";
            jogador2.style.left = "0px";
            jogador3.style.left = "0px";
        } else {
            p1 += 10;
            jogador1.style.left = p1 + "px";

        }
    }

    if (tecla == "p") {
        if (p2 == 1660) {
            Vitoria("Hermione")
            p1 = 0;
            p2 = 0;
            p3 = 0;
            jogador1.style.left = "0px";
            jogador2.style.left = "0px";
            jogador3.style.left = "0px";

        } else {
            p2 += 10;
            jogador2.style.left = p2 + "px";
        }
    }

    if (tecla == "b") {
        if (p3 == 1660) {
            Vitoria("Ron")
            p1 = 0;
            p2 = 0;
            p3 = 0;
            jogador1.style.left = "0px";
            jogador2.style.left = "0px";
            jogador3.style.left = "0px";

        } else {
            p3 += 10;
            jogador3.style.left = p3 + "px";
        }
    }
}

function player(numero) {
    for (i = 1; i <= numero; i++) {
        document.getElementById("p" + i).style.display = "block"
    }
}

function Vitoria(vencedor) {
    Swal.fire({
        icon: "success",
        title: "🏆Parabéns! " + vencedor + " venceu.🏆",
        showConfirmButton: false,
        timer: 2000
    });
}