require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
});

app.get('/', (req, res) =>{
    res.json({mssg: 'Welcome to the Ekovis api :3'})
});

app.listen(process.env.PORT, () => {
    console.log('App listeing on port', process.env.PORT)
});
