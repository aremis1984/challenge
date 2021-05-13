const csvToJson = require('convert-csv-to-json')
const _ = require('underscore')

const merge_object_arrays = (trackings, checkpoints) => {

  //merge all the articles in trackings into a list
  let orderTrackings = trackings.map(track => {
      let article_list = []
      trackings.forEach(order => {
        if(track.orderNo === order.orderNo && order.articleNo) {
          article_list.push({
            articleNo: order.articleNo,
            product_name: order.product_name,
            quantity: order.quantity,
            articleImageUrl: order.articleImageUrl
          })
        }
        delete track.articleNo
        delete track.product_name
        delete track.quantity
        delete track.articleImageUrl
    })
    return Object.assign({...track, article_list})
  })

  // Remove duplicated obects by orderNo
  orderTrackings = removeDuplications(orderTrackings)

  //merge checkpoints into a list and add it to trackings
  const results = orderTrackings.map(track => {
    const order_details = checkpoints.filter(check => {
      if(track.tracking_number === check.tracking_number) {
        return check
      }
    })
    const points = {
      order_details
    }
    return Object.assign(track, points)
  })
  return results
}

const removeDuplications = (arr) => {
  const clean = arr.filter((arr, index, self) =>
      index === self.findIndex((t) => (t.orderNo === arr.orderNo)))
  return clean
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

        checkpoints.sort((a, b) => {
          if (a.timestamp > b.timestamp){
            return 1;
          } else if (a.timestamp < b.timestamp){
            return -1;
          } else {
              return 0;
          }
        })

        if(trackings.length > 0) {
          const results = merge_object_arrays (trackings, checkpoints)

          //return an object which includes trackings and asociated checkpoints
          return res.status(200).send(results)
        }

        return res.status(400).json({ not_found: true })

    } catch (error) {
        console.log(error.message)
        res.status(500).send(error.message)
    }
}
