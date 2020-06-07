
exports.check = (req, res) => {
    setTimeout(function() {
        res.status(200).send('Todos los servicios responden adecuadamente.');

    }, 2000);
}
