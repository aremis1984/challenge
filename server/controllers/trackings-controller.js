const csvToJson = require('convert-csv-to-json')
const _ = require('underscore')

function merge_object_arrays (arr1, arr2, match) {
  return _.union(
    _.map(arr1, function (obj1) {
      var same = _.find(arr2, function (obj2) {
        return obj1[match] === obj2[match]
      })
      return same ? _.extend(obj1, same) : obj1
    }),
    _.reject(arr2, function (obj2) {
      return _.find(arr1, function(obj1) {
        return obj2[match] === obj1[match]
      })
    })
  )
} 

exports.getTrackingsByEmail = async (req, res) => {
    try {
        const data = csvToJson.getJsonFromCsv(__dirname + '/../data/trackings.csv')
        const email = req.params.email

        if (!email) {
            return res.status(400).json({
                success: false,
                error: 'You must provide a valid email address.'
            })
        }
        const trackings = data.filter(tracking => tracking.email === email)
        const checkpoints = csvToJson.getJsonFromCsv(__dirname + '/../data/checkpoints.csv')

        if(trackings.length > 0) {
          const results = merge_object_arrays(trackings, checkpoints, 'tracking_number')
          console.log(results)
          return res.status(200).send(results)
        }

        return res.status(400).json({ not_found: true })

    } catch (error) {
        console.log(error.message)
        res.status(500).send(error.message)
    }
}
