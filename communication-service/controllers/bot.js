
exports.receive = (req, res) => {
    let msg = req.body.message;
    res.status(200).send('Bot recibió: ' + msg);
    res.json('Bot recibió: ' + msg);

}

exports.send = (req, res) => {
    let messages = [
        'Bienvenido', '¿Qué vas a ordernar?', '¿Necesitas asistencia?', 'Buenas tardes', '¡Hola!'
    ];
    let randomNum = Math.floor(Math.random() * messages.length);  

    res.json(messages[randomNum]);
}