function calcaposentadoria(valor3, aporte3, juros3, tempo3) {
    if (isNaN(valor3) || isNaN(aporte3) || isNaN(juros3) || isNaN(tempo3) || 
        valor3 < 0 || aporte3 < 0 || juros3 < 0 || tempo3 < 0) {
        document.getElementById('resultado').textContent = "Por favor, insira valores válidos.";
        return null;
    } else {
        juros3 = juros3 / 100 / 12;
        tempo3 = tempo3 * 12;
        let valorfinal = valor3 * Math.pow(1 + juros3, tempo3); 

        for (let i = 0; i < tempo3; i++) {
            valorfinal += aporte3 * Math.pow(1 + juros3, tempo3 - i);
        }

        return valorfinal;
    }
}

document.getElementById('calcular').addEventListener('click', function () {
    const valor3 = parseFloat(document.getElementById('valor3').value);
    const aporte3 = parseFloat(document.getElementById('aporte3').value);
    const juros3 = parseFloat(document.getElementById('juros3').value);
    const tempo3 = parseInt(document.getElementById('tempo3').value, 10);

    const resultado = calcaposentadoria(valor3, aporte3, juros3, tempo3);
    if (resultado !== null) {
        document.getElementById('resultado').textContent = `Valor final após aposentadoria: R$ ${resultado.toFixed(2)}`;
    }
});