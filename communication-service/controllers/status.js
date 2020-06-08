
exports.get = (req, res) => {
    let messages = [
        'Orden tomada', 'Orden en camino', 'Orden preparandose', 'Orden entregada', 'Orden cancelada'
    ];
    let randomNum = Math.floor(Math.random() * messages.length);  
    res.json('El estatus actual es: ' + messages[randomNum]);
}

exports.update = (req, res) => {
    res.json('Estatus actualizado');
}