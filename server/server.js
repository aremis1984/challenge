const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const trakingsRouter = require('./routes/trackings-router')

const app = express()
const apiPort = 8080

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

app.use('/api', trakingsRouter)

// Implement 500 error route
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something is broken.' + err.stack)
})

app.use(function (req, res, next) {
    res.status(404).send('Sorry we could not find that.')
})

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))