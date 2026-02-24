function calcularprimeiromilhao(valor5, aporte5, juros5) {
    if (isNaN(valor5) || isNaN(aporte5) || isNaN(juros5) || 
        valor5 < 0 || aporte5 < 0 || juros5 < 0) {
        document.getElementById('resultado').textContent = "Por favor, insira valores válidos.";
        return null;
    }

    juros5 = juros5 / 100;
    let meses = 0;
    const objetivo = 1000000;

    while (valor5 < objetivo) {
        valor5 += aporte5;
        valor5 *= (1 + juros5);
        meses++;
    }

    return meses;
}

document.getElementById('calcular').addEventListener('click', function () {
    const valor5 = parseFloat(document.getElementById('valor5').value);
    const aporte5 = parseFloat(document.getElementById('aporte5').value);
    const juros5 = parseFloat(document.getElementById('juros5').value);

    const meses = calcularprimeiromilhao(valor5, aporte5, juros5);
    
    if (meses !== null) {
        const anos = (meses / 12).toFixed(1);
        document.getElementById('resultado').textContent = `Você atingirá 1 milhão em aproximadamente ${anos} anos (${meses} meses).`;
    }
});