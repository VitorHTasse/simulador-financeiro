function calcularAmortizacao(saldoDevedor, jurosMensais, prazo) {
    if (isNaN(saldoDevedor) || isNaN(jurosMensais) || isNaN(prazo) || 
        saldoDevedor <= 0 || jurosMensais < 0 || prazo <= 0) {
        mostrarResultado("Por favor, insira valores válidos.");
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
    
    return {
        parcelaMensal: parcelaMensal,
        saldos: saldos
    };
}

function pegarValores() {
    const saldoDevedor = parseFloat(document.getElementById("saldoDevedor").value);
    const jurosMensais = parseFloat(document.getElementById("jurosMensais").value);
    const prazo = parseInt(document.getElementById("prazo").value, 10);

    const resultado = calcularAmortizacao(saldoDevedor, jurosMensais, prazo);
    
    if (resultado !== null) {
        const { parcelaMensal, saldos } = resultado;
        mostrarResultado(saldoDevedor, jurosMensais, prazo, parcelaMensal);
    }
}

function mostrarResultado(saldoDevedor, jurosMensais, prazo, parcelaMensal) {
    if (typeof saldoDevedor === 'string') {
        document.getElementById("resultado").innerHTML = saldoDevedor;
    } else {
        document.getElementById("resultado").innerHTML = `Com um saldo devedor de R$ ${saldoDevedor.toFixed(2)} e juros mensais de ${jurosMensais}%, o valor da parcela mensal será de R$ ${parcelaMensal.toFixed(2)} durante ${prazo} meses.`;
    }
}

document.getElementById("calcular").addEventListener("click", pegarValores);