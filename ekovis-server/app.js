require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000 || process.env.PORT;

app.use('/', require('./routes/main'));

app.listen(PORT, () => {
    console.log('App listeing on port 5000');
});
