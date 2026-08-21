// Botões de acessibilidade
document.addEventListener("DOMContentLoaded", () => {
    
    const btnContraste = document.getElementById("btn-contraste");
    const btnAumentar = document.getElementById("btn-aumentar-texto");
    const btnDiminuir = document.getElementById("btn-diminuir-texto");

    let tamanhoAtualfonte = 100;

    // Função alto contraste
    if (btnContraste) {
        btnContraste.addEventListener("click", () => {
            document.body.classList.toggle("alto-contraste");

            // Acessibilidade para leitores de tela 
            const ativo = document.body.classList.contains("alto-contraste");
            btnContraste.setAttribute("aria-pressed", ativo);
        });
    }

    // Função aumentar o texto
    if (btnAumentar) {
        btnAumentar.addEventListener("click", () => {
            if (tamanhoAtualfonte < 150) {
                tamanhoAtualfonte += 10;
                document.documentElement.style.fontSize = `${tamanhoAtualfonte}%`;
            }
        });
    }

    // Função diminuir o texto
    if (btnDiminuir) {
        btnDiminuir.addEventListener("click", () => {
            if (tamanhoAtualfonte > 90) {
                tamanhoAtualfonte -= 10;
                document.documentElement.style.fontSize = `${tamanhoAtualfonte}%`;
            }
        });
    }

});