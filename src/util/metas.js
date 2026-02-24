function calcularMeta(meta, aporte, rentabilidadeAnual) {
    if (isNaN(meta) || isNaN(aporte) || isNaN(rentabilidadeAnual) || 
        meta < 0 || aporte < 0 || rentabilidadeAnual < 0) {
        return null;
    }

    const taxaMensal = (rentabilidadeAnual / 100) / 12;
    const meses = Math.log((meta * taxaMensal / aporte) + 1) / Math.log(1 + taxaMensal);
    return meses;
}

module.exports = calcularMeta
