
exports.create = (req, res) => {
    setTimeout(function() {
        res.sendStatus(200);

    }, 700);
}

exports.invalid = (req, res) => {
    res.sendStatus(411);
}