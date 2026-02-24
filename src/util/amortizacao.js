function calcularAmortizacao(saldoDevedor, jurosMensais, prazo) {
    if (isNaN(saldoDevedor) || isNaN(jurosMensais) || isNaN(prazo) || 
        saldoDevedor <= 0 || jurosMensais < 0 || prazo <= 0) {
        return null;
    }

    const taxaJuros = jurosMensais / 100;
    const parcelaMensal = (saldoDevedor * taxaJuros) / (1 - Math.pow(1 + taxaJuros, -prazo));
    
    let saldos = [];
    let saldoAtual = saldoDevedor;
    for (let i = 1; i <= prazo; i++) {
        saldoAtual = saldoAtual * (1 + taxaJuros) - parcelaMensal;
        saldos.push(saldoAtual);
    }
    
    return parcelaMensal;
}

module.exports = calcularAmortizacao