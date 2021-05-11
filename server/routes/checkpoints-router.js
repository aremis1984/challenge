const express = require('express')
const checkpoinstCtrl = require('../controllers/checkpoints-controller')
const router = express.Router()

router.get('/checkpoints', checkpoinstCtrl.getCheckpoints)
router.get('/checkpoints/:tracking', checkpoinstCtrl.getCheckpointsByTracking)

module.exports = router