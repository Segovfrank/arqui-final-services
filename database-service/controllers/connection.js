
exports.connect = (req, res) => {
    setTimeout(function() {
        res.json('Conexión con la base de datos exitosa.');

    }, 900);
}
