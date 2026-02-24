function calcularCustoTempo(salario, horasDia) {
    if (isNaN(salario) || isNaN(horasDia) || salario < 0 || horasDia <= 0) {
        return null;
    }

    const salarioPorHora = salario / (horasDia * 22);
    const tempoPara100Reais = 100 / salarioPorHora;
    return tempoPara100Reais;
}

module.exports = calcularCustoTempo