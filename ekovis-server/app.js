const express = require('express')
const { connectToDb, getDb } = require('./db')

// init app & middleware
const app = express()

// db connection
let db

connectToDb((err) => {
    if(!err){
        app.listen(3000, () => {
            console.log('app listening on port 3000')
        })
        db = getDb()
    }
}) 

// routes
app.get('/playerchara', (req, res) => {
    res.json({mssg: 'welcome to the api :3c'})
})