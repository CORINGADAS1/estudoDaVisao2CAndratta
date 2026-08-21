document.addEventListener("DOMContentLoaded", () => {
    // Seleciona os botões pelos IDs do HTML
    const btnContraste = document.getElementById("btn-contraste");
    const btnAumentar = document.getElementById("btn-aumentar-texto");
    const btnDiminuir = document.getElementById("btn-diminuir-texto");

    let tamanhoFonte = 100;

    // 1. Função para Mudar a Cor (Alto Contraste)
    if (btnContraste) {
        btnContraste.addEventListener("click", () => {
            document.body.classList.toggle("alto-contraste");
        });
    }

    // 2. Função para Aumentar o Texto
    if (btnAumentar) {
        btnAumentar.addEventListener("click", () => {
            if (tamanhoFonte < 150) {
                tamanhoFonte += 10;
                document.body.style.fontSize = `${tamanhoFonte}%`;
            }
        });
    }

    // 3. Função para Diminuir o Texto
    if (btnDiminuir) {
        btnDiminuir.addEventListener("click", () => {
            if (tamanhoFonte > 90) {
                tamanhoFonte -= 10;
                document.body.style.fontSize = `${tamanhoFonte}%`;
            }
        });
    }
});