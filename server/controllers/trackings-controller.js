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
        const email = req.params.email

        if (!email) {
            return res.status(400).json({
                success: false,
                error: 'You must provide a valid email address.',
            })
        }
        const results = data.filter(tracking => tracking.email === email)
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
