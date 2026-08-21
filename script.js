//botões de acessibilidade
document.addEventListener("DOMContentLoaded", () => {
    
    const btnContraste = document.getElementById("btn-contraste");
    const btnAumentar = document.getElementById("btn-aumentar-texto");
    const btnDiminuir = document.getElementById("btn-diminuir-texto");

    let tamanhoAtualfonte = 100;
    let altoContrasteAtivo = false;

    //função alto contraste (aplica as cores diretamente no JS)
    btnContraste.addEventListener("click", () => {
        altoContrasteAtivo = !altoContrasteAtivo;

        if (altoContrasteAtivo) {
            document.body.style.backgroundColor = "#000000";
            document.body.style.color = "#FFFF00";
        } else {
            document.body.style.backgroundColor = "";
            document.body.style.color = "";
        }

        btnContraste.setAttribute("aria-pressed", altoContrasteAtivo);
    });

    //função aumentar o texto (aplica o tamanho em todos os elementos)
    btnAumentar.addEventListener("click", () => {
        if (tamanhoAtualfonte < 150) {
            tamanhoAtualfonte += 10;
            document.body.style.zoom = `${tamanhoAtualfonte}%`;
        }
    });

    //função diminuir texto
    btnDiminuir.addEventListener("click", () => {
        if (tamanhoAtualfonte > 90) {
            tamanhoAtualfonte -= 10;
            document.body.style.zoom = `${tamanhoAtualfonte}%`;
        }
    });

});