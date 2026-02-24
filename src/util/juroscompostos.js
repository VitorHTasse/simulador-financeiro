function calcjuroscompostos(valor1, juros1, tempo1) {

    if (isNaN(valor1) || isNaN(juros1) || isNaN(tempo1) || 
        valor1 < 0 || juros1 < 0 || tempo1 < 0) {
        return null;
    }

    juros1 = juros1 / 100;
    const valorfinal = valor1 * Math.pow(1 + juros1, tempo1);
    return Number(valorfinal);
}


module.exports = calcjuroscompostos