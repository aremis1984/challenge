const express = require('express')
const tackingsCtrl = require('../controllers/trackings-controller')
const router = express.Router()

router.get('/trackings', tackingsCtrl.getTrackings)
router.get('/user-trackings/:email', tackingsCtrl.getTrackingsByEmail)

module.exports = router