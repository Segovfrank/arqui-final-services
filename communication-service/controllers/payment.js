
exports.createPayment = (req, res) => {
    setTimeout(function() {
        res.json('Pago exitoso');
    }, 800);
}


exports.processTransaction = (req, res) => {
    setTimeout(function() {
        res.json('Transacción exitosa');
    }, 1200);
}