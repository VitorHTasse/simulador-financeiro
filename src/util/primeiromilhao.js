function calcularprimeiromilhao(valor5, aporte5, juros5) {

    if (isNaN(valor5) || isNaN(aporte5) || isNaN(juros5) || 
        valor5 < 0 || aporte5 < 0 || juros5 < 0) {
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

module.exports = calcularprimeiromilhao