function calcjurossimples(valor, juros, tempo) {
    if (isNaN(valor) || isNaN(juros) || isNaN(tempo) || 
        valor < 0 || juros < 0 || tempo < 0) {
        document.getElementById('resultado').textContent = "Por favor, insira valores válidos.";
        return null;
    }
    
    juros = juros / 100;
    const valorfinal = valor + (valor * juros * tempo);
    return Number(valorfinal);
}

document.getElementById('calcular').addEventListener('click', function () {
    const valor = parseFloat(document.getElementById('valor').value);
    const juros = parseFloat(document.getElementById('juros').value);
    const tempo = parseInt(document.getElementById('tempo').value, 10);

    const resultado = calcjurossimples(valor, juros, tempo);
    if (resultado !== null) {
        document.getElementById('resultado').textContent = `Valor final dos Juros Simples: R$ ${resultado.toFixed(2)}`;
    }
});