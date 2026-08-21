document.addEventListener("DOMContentLoaded", () => {
    const btnContraste = document.getElementById("btn-contraste");
    const btnAumentar = document.getElementById("btn-aumentar-texto");
    const btnDiminuir = document.getElementById("btn-diminuir-texto");

    let tamanhoAtualFonte = 100;

    if (btnContraste) {
        btnContraste.addEventListener("click", () => {
            document.body.classList.toggle("alto-contraste");
            const estaAtivo = document.body.classList.contains("alto-contraste");
            btnContraste.setAttribute("aria-pressed", estaAtivo);
        });
    }

    if (btnAumentar) {
        btnAumentar.addEventListener("click", () => {
            if (tamanhoAtualFonte < 150) {
                tamanhoAtualFonte += 10;
                document.body.style.fontSize = `${tamanhoAtualFonte}%`;
            }
        });
    }

    if (btnDiminuir) {
        btnDiminuir.addEventListener("click", () => {
            if (tamanhoAtualFonte > 90) {
                tamanhoAtualFonte -= 10;
                document.body.style.fontSize = `${tamanhoAtualFonte}%`;
            }
        });
    }
});