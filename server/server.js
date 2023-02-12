const express = require('express')
const translateRouter = require('./routes/translate')

require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 8080

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET, OPTIONS, POST, PUT")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

app.use((req, res, next) => {
    console.log(`Received request ${req.method} ${req.url} ${req.hostname}`)
    next()
})

app.use(express.json())

app.use('/translate', translateRouter)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})