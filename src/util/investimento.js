function calcinvestimento(valor4, juros4, tempo4) {

    if (isNaN(valor4) || isNaN(juros4) || isNaN(tempo4) || 
        valor4 < 0 || juros4 < 0 || tempo4 < 0) {
        return null;
    }

    juros4 = juros4 / 100;
    const valorfinal = (valor4 * Math.pow(1 + juros4, tempo4));
    return valorfinal;
}

module.exports = calcinvestimento