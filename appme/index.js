const express = require('express');
const { exec } = require('child_process');

const app = express();
const port = 3000;

app.use(express.static('views'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.post('/run-automation', (req, res) => {
    exec('node automation.js', (err, stdout, stderr) => {
        if (err) {
            res.status(500).send('Error executing automation script');
            return;
        }
        res.send('Automation script executed successfully');
    });
});

app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});
