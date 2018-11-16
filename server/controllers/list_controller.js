let list = [];

let id = 0;

module.exports = {
    create: (req, res) => {
        list.push({text: req.body})
        id++;
        res.status(200).send(list)
    },
    read: (req, res) => {
        res.status(200).send(list)
    }
}