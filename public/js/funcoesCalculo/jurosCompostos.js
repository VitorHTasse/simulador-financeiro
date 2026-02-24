function calcjuroscompostos(valor1, juros1, tempo1) {
    if (isNaN(valor1) || isNaN(juros1) || isNaN(tempo1) || 
        valor1 < 0 || juros1 < 0 || tempo1 < 0) {
        document.getElementById('resultado').textContent = "Por favor, insira valores válidos.";
        return null;
    }

    juros1 = juros1 / 100;
    const valorfinal = valor1 * Math.pow(1 + juros1, tempo1);
    return Number(valorfinal);
}

document.getElementById('calcular').addEventListener('click', function () {
    const valor1 = parseFloat(document.getElementById('valor1').value);
    const juros1 = parseFloat(document.getElementById('juros1').value);
    const tempo1 = parseInt(document.getElementById('tempo1').value, 10);

    const resultado = calcjuroscompostos(valor1, juros1, tempo1);
    if (resultado !== null) {
        document.getElementById('resultado').textContent = `Valor final dos Juros Compostos: R$ ${resultado.toFixed(2)}`;
    }
});