const express = require("express")
const router = express.Router()

const videoRoutes = require('./videoRoutes')

router.get("/videos", videoRoutes)


module.exports = router;