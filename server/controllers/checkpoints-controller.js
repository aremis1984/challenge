const csvToJson = require('convert-csv-to-json');

exports.getCheckpoints = async (req, res) => {
    try {
        const results = csvToJson.getJsonFromCsv(__dirname + '/../data/checkpoints.csv')
        console.log(results)
        res.status(200).send(results)
    } catch (error) {
        console.log('error:', error.message)
        res.status(500).send(error.message)
    }
}

exports.getCheckpointsByTracking = async (req, res) => {
    try {
        const data = csvToJson.getJsonFromCsv(__dirname + '/../data/checkpoints.csv')
        const results = data.find(point => point.tracking_number === req.params.tracking)
        console.log(results)
        res.status(200).send(results)
    } catch (error) {
        console.log('error:', error.message)
        res.status(500).send(error.message)
    }
}