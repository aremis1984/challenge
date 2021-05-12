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
        const tracking = req.params.tracking

        if (!tracking) {
            return res.status(400).json({
                success: false,
                error: 'You must provide a valid tracking number',
            })
        }
        const results = data.filter(point => point.tracking_number === tracking)
        console.log(results)
        if(results.length > 0) {
            return res.status(200).send(results)
        } else {
            return res.status(400).json({ not_found: true })
        }

    } catch (error) {
        console.log('error:', error.message)
        res.status(500).send(error.message)
    }
}