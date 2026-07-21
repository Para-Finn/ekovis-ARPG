require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const characterRoutes = require('./routes/characters')
const userRoutes = require('./routes/users')

const app = express()

// middleware stuff
app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
});

// routes
app.use('/api/characters', characterRoutes)
app.use('/api/users', userRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('I am connected to MongoDB! Listening on PORT', process.env.PORT)
        })

    })
    .catch((error) => {
        console.log(error)
    })
