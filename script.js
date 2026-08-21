//botões de acessibilidade
document.addEventListener("DOMContentLoaded", () => {
    
    const btnContraste = document.getElementById("btn-contraste");
    const btnAumentar = document.getElementById("btn-aumentar-texto");
    const btnDiminuir = document.getElementById("btn-diminuir-texto");

    let tamanhoAtualfonte = 100;

    // PEGADINHA 1: Alto Contraste sem depender do CSS externo
    // Se o CSS não tiver a classe .alto-contraste, alteramos o estilo direto no elemento para A TELA MUDAR DE VERDADE
    btnContraste.addEventListener("click", () => {
        document.body.classList.toggle("alto-contraste");

        const ativo = document.body.classList.contains("alto-contraste");
        btnContraste.setAttribute("aria-pressed", ativo);

        if (ativo) {
            document.body.style.backgroundColor = "#000000";
            document.body.style.color = "#FFFF00";
        } else {
            document.body.style.backgroundColor = "";
            document.body.style.color = "";
        }
    });

    // PEGADINHA 2: Alterar o tamanho da fonte diretamente no body/elementos
    // Se no HTML os textos estiverem em pixels (px), alterar o 'fontSize' do 'documentElement' não faz efeito visual.
    // Usar 'fontSize' direto no body força a mudança visível.
    btnAumentar.addEventListener("click", () => {
        if (tamanhoAtualfonte < 150) {
            tamanhoAtualfonte += 10;
            document.body.style.fontSize = `${tamanhoAtualfonte}%`;
        }
    });

    // PEGADINHA 3: Operador invalido e escopo da função
    btnDiminuir.addEventListener("click", () => {
        if (tamanhoAtualfonte > 90) {
            tamanhoAtualfonte -= 10; // No seu código estava .= 10
            document.body.style.fontSize = `${tamanhoAtualfonte}%`; // Estava fora do IF no seu código original
        }
    });

});