function calcularCustoTempo(salario, horasDia) {
    if (isNaN(salario) || isNaN(horasDia) || salario < 0 || horasDia <= 0) {
        mostrarResultado("Por favor, insira valores válidos.");
        return null;
    }

    const salarioPorHora = salario / (horasDia * 22);
    const tempoPara100Reais = 100 / salarioPorHora;
    return tempoPara100Reais;
}

function pegarValores() {
    const salario = parseFloat(document.getElementById("salario").value);
    const horasDia = parseFloat(document.getElementById("horasDia").value);

    const tempoPara100Reais = calcularCustoTempo(salario, horasDia);
    mostrarResultado(salario, horasDia, tempoPara100Reais);
}

function mostrarResultado(salario, horasDia, tempoPara100Reais) {
    const resultadoElement = document.getElementById("resultado");
    
    if (tempoPara100Reais !== null && tempoPara100Reais > 0) {
        const tempoEmMinutos = tempoPara100Reais * 60; 
        resultadoElement.innerHTML = `Com um salário de R$ ${salario.toFixed(2)} por mês e ${horasDia} horas de trabalho por dia, você precisará trabalhar aproximadamente ${tempoEmMinutos.toFixed(1)} minutos/ ${tempoPara100Reais.toFixed(1)} horas para ganhar R$ 100.`;
    } else {
        resultadoElement.innerHTML = "Por favor, insira valores válidos.";
    }
}

document.getElementById("calcular").addEventListener("click", pegarValores);