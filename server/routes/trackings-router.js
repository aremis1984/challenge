const express = require('express')
const tackingsCtrl = require('../controllers/trackings-controller')
const router = express.Router()

router.post('/user-trackings', tackingsCtrl.getTrackingsByEmail)

module.exports = router