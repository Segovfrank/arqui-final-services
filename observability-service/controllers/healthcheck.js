
exports.check = (req, res) => {
    setTimeout(function() {
        res.json('Todos los servicios responden adecuadamente.');

    }, 2000);
}
