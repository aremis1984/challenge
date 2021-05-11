const express = require('express')
const cors = require('cors')

const checkpointsRouter = require('./routes/checkpoints-router')
const trakingsRouter = require('./routes/trackings-router')

const app = express()
const apiPort = 3000

app.use(cors())

app.use('/api', checkpointsRouter, trakingsRouter)

// Implement 500 error route
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something is broken.' + err.stack)
})

// Implement 404 error route
app.use(function (req, res, next) {
    res.json({notFound: true, message: 'Sorry we could not find that.'})
    res.status(404).send(res)
})

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))