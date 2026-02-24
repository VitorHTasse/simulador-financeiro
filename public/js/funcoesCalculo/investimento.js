function calcinvestimento(valor4, juros4, tempo4) {
    if (isNaN(valor4) || isNaN(juros4) || isNaN(tempo4) || 
        valor4 < 0 || juros4 < 0 || tempo4 < 0) {
        document.getElementById('resultado').textContent = "Por favor, insira valores válidos.";
        return null;
    }

    juros4 = juros4 / 100;
    const valorfinal = valor4 * Math.pow(1 + juros4, tempo4);
    return valorfinal;
}

document.getElementById('calcular').addEventListener('click', function () {
    const valor4 = parseFloat(document.getElementById('valor4').value);
    const juros4 = parseFloat(document.getElementById('juros4').value);
    const tempo4 = parseInt(document.getElementById('tempo4').value, 10);

    const resultado = calcinvestimento(valor4, juros4, tempo4);
    if (resultado !== null) {
        document.getElementById('resultado').textContent = `Valor final do investimento: R$ ${resultado.toFixed(2)}`;
    }
});