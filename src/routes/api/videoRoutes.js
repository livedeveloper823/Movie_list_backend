const express = require("express")
const router = express.Router()

const videoController = require('../../controllers/videoController')

router.get('/all', videoController.all)
router.post('/addvideo', videoController.addVideo)
router.get('/video/:video_id', videoController.videoInfo)

module.exports = router;