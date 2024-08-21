const Video = require("../models/Video");

// @route   GET api/videos/all
// @desc    EventsData
// @access  Public
const all = async (req, res) => {
  await Video.find()
    // .sort({ date: 1 })
    .then((videos) => res.status(200).json({ success: true, data: { videos } }))
    .catch((err) =>
      res.status(404).json({ msg: "No videos found.", err: err.message })
    );
};

// @route   GET api/videos/add
// @desc    EventsData
// @access  Public

const addVideo = async (req, res) => {
    try{
        await Video.findOne()
        .then()
        .catch()
    } catch {

    }
}

module.exports = { all, addVideo };
