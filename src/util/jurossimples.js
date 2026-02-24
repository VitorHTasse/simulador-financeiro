function calcjurossimples(valor, juros, tempo) {

    if (isNaN(valor) || isNaN(juros) || isNaN(tempo) || 
        valor < 0 || juros < 0 || tempo < 0) {
        return null;
    }

    juros = juros / 100;
    const valorfinal = valor + (valor * juros * tempo); 
    return Number(valorfinal); 
}



module.exports = calcjurossimples