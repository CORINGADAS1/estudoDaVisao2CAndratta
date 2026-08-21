//botões de acessibilidade
document.addEventListener("DOMContentLoaded", () => {
    
    const btnContraste = document.getElementById("btn-contraste");
    const btnAumentar = document.getElementById("btn-aumentar-texto");
    const btnDiminuir = document.getElementById("btn-diminuir-texto");

    let tamanhoAtualfonte = 100;
    let altoContrasteAtivo = false;

    //função alto contraste
    if (btnContraste) {
        btnContraste.addEventListener("click", () => {
            altoContrasteAtivo = !altoContrasteAtivo;
            document.body.classList.toggle("alto-contraste");

            if (altoContrasteAtivo) {
                document.body.style.backgroundColor = "#000000";
                document.body.style.color = "#FFFF00";
            } else {
                document.body.style.backgroundColor = "";
                document.body.style.color = "";
            }

            btnContraste.setAttribute("aria-pressed", altoContrasteAtivo);
        });
    }

    //função aumentar o texto
    if (btnAumentar) {
        btnAumentar.addEventListener("click", () => {
            if (tamanhoAtualfonte < 150) {
                tamanhoAtualfonte += 10;
                document.body.style.fontSize = `${tamanhoAtualfonte}%`;
            }
        });
    }

    //função diminuir texto
    if (btnDiminuir) {
        btnDiminuir.addEventListener("click", () => {
            if (tamanhoAtualfonte > 90) {
                tamanhoAtualfonte -= 10;
                document.body.style.fontSize = `${tamanhoAtualfonte}%`;
            }
        });
    }

});