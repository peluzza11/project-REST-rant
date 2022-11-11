require('dotenv').config()
// Require needed modules.
require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.listen(process.env.PORT)


// Listen for connections.
app.listen(3000, function () {
    console.log('I am awake!')
})
