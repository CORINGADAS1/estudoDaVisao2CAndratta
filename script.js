//botões de acessibilidade
document.addEventListener("DOMContentLoaded", () => {
    
    const btnContraste = document.getElementById("btn-contraste");
    const btnAumentar = document.getElementById("btn-aumentar-texto");
    const btnDiminuir = document.getElementById("btn-diminuir-texto");

    let tamanhoAtualfonte = 100;
    let altoContrasteAtivo = false;

    // Função Alto Contraste (Aplica cores direto no documento)
    if (btnContraste) {
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
    }

    // Função Aumentar Texto (Altera o zoom/tamanho da fonte do body)
    if (btnAumentar) {
        btnAumentar.addEventListener("click", () => {
            if (tamanhoAtualfonte < 150) {
                tamanhoAtualfonte += 10;
                document.body.style.fontSize = `${tamanhoAtualfonte}%`;
            }
        });
    }

    // Função Diminuir Texto
    if (btnDiminuir) {
        btnDiminuir.addEventListener("click", () => {
            if (tamanhoAtualfonte > 90) {
                tamanhoAtualfonte -= 10;
                document.body.style.fontSize = `${tamanhoAtualfonte}%`;
            }
        });
    }

});