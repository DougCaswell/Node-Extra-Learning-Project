const express = require('express');
const bodyParser = require('body-parser')
const controller = require('./controllers/list_controller')

const app = express();

app.use(bodyParser.json())
app.use(express.static(__dirname + '/..public/build'))

const port = 3002;

app.post('/api/items', controller.create)
app.get('/api/items', controller.read)

app.listen(port, () => {console.log('Project Running on Port: ' + port)})