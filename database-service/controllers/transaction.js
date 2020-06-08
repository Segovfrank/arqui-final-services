
exports.create = (req, res) => {
    setTimeout(function() {
        res.json("Transaccion registrata en la base de datos exitosamente.");

    }, 700);
}

exports.invalid = (req, res) => {
    res.sendStatus(500);
}