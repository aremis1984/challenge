const csvToJson = require('convert-csv-to-json')

exports.getTrackings = async (req, res) => {
    try {
        const results = csvToJson.getJsonFromCsv(__dirname + '/../data/trackings.csv')
        console.log(results)
        res.status(200).send(results)
    } catch (error) {
        console.log('error:', error.message)
        res.status(500).send(error.message)
    }
}

exports.getTrackingsByEmail = async (req, res) => {
    try {
        const data = csvToJson.getJsonFromCsv(__dirname + '/../data/trackings.csv')
        const results = data.find(track => track.email === req.params.email)
        console.log(results)
        res.status(200).send(results)
    } catch (error) {
        console.log('error:', error.message)
        res.status(500).send(error.message)
    }
}
