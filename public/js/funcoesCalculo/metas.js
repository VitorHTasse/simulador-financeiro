function calcularMeta(meta, aporte, rentabilidadeAnual) {
    if (isNaN(meta) || isNaN(aporte) || isNaN(rentabilidadeAnual) || 
        meta < 0 || aporte < 0 || rentabilidadeAnual < 0) {
        mostrarResultado("Por favor, insira valores válidos.");
        return null;
    }

    const taxaMensal = (rentabilidadeAnual / 100) / 12;
    const meses = Math.log((meta * taxaMensal / aporte) + 1) / Math.log(1 + taxaMensal);
    return meses;
}

function pegarValores() {
    const meta = parseFloat(document.getElementById("meta").value);
    const aporte = parseFloat(document.getElementById("aporte").value);
    const rentabilidadeAnual = parseFloat(document.getElementById("rentabilidade").value);

    const meses = calcularMeta(meta, aporte, rentabilidadeAnual);
    mostrarResultado(meta, aporte, rentabilidadeAnual, meses);
}

function mostrarResultado(meta, aporte, rentabilidadeAnual, meses) {
    const resultadoElement = document.getElementById("resultado");
    
    if (meses === null) {
        resultadoElement.innerHTML = "Por favor, insira valores válidos.";
        return;
    }

    if (meses > 0) {
        resultadoElement.innerHTML = `Com um aporte de R$ ${aporte.toFixed(2)} por mês, você atingirá sua meta de R$ ${meta.toFixed(2)} em aproximadamente ${Math.ceil(meses)} meses (${(Math.ceil(meses) / 12).toFixed(1)} anos).`;
    } else {
        resultadoElement.innerHTML = "Com os valores informados, a meta não será atingida.";
    }
}

document.getElementById("calcular").addEventListener("click", pegarValores);