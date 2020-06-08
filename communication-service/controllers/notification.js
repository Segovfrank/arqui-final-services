
exports.sendOrder = (req, res) => {
    let order = req.body.name;
    let amount = req.body.amount;

    setTimeout(function() {
        res.json('(' + amount + ') - ' + order + ' tomada exitosamente!');

    }, 500);
}

exports.sendTicket = (req, res) => {
    let ticketNumber = req.body.number;
    let ticketProblem = req.body.ticket;

    setTimeout(function() {
        res.json('Ticket #' + ticketNumber + ' - ' + ticketProblem);

    }, 500);
}

exports.sendTransaction = (req, res) => {
    let transactionNumber = req.body.number;
    let transaction = req.body.transaction;

    setTimeout(function() {
        res.json('Transaccion #' + transactionNumber + ' - ' + transaction + ' --- generado exitosamente.');

    }, 800);
}