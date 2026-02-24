function calcaposentadoria(valor3, aporte3, juros3, tempo3) {

    if (isNaN(valor3) || isNaN(aporte3) || isNaN(juros3) || isNaN(tempo3) || 
    valor3 < 0 || aporte3 < 0 || juros3 < 0 || tempo3 < 0) {
    return null;
    }

    juros3 = juros3 / 100 / 12;
    tempo3 = tempo3 * 12; 
    let valorfinal = valor3 * Math.pow(1 + juros3, tempo3); 

    for (let i = 0; i < tempo3; i++) {
        valorfinal += aporte3 * Math.pow(1 + juros3, tempo3 - i);
    }

    return valorfinal;
}

module.exports = calcaposentadoria