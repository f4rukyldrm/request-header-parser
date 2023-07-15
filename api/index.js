const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 4000;

// for fcc tests
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));

app.get('/api/whoami', (req, res) => {
    res.json({
        ipaddress: req.socket.remoteAddress,
        language: req.headers['accept-language'],
        software: req.headers['user-agent']
    });
});


app.listen(PORT, console.log('app listening on:', PORT));