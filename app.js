const express = require('express');
const app = express();
const path = require('path')
const PORT = 3000;

app.listen(PORT, () => {
    console.log('Runing Server Port3000...')
});

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/index.html'))
})