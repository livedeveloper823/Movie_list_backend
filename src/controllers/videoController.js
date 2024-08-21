const Videos = require("../models/Video");

// @route   GET api/videos/all
// @desc    EventsData
// @access  Public
const all = async (req, res) => {
  await Videos.find()
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
  try {
    const { title, image, publishingDate } = req.body;
    const video = await Videos.findOne({ title });
    if (video) {
      return res.status(400).json({ msg: "Video already exist." });
    }

    const newVideo = new Videos({
      title: title,
      image: image,
      publishingYear: publishingDate,
    });

    newVideo
      .save()
      .then(
        res.status(200).json({ msg: "Successfully added!", data: newVideo })
      )
      .catch((error) => {
        res.status(400).json({ msg: "The save failed!", error: error.message });
      });
  } catch (error) {
    res.status(404).json({ msg: error.message, data: error });
  }
};

module.exports = { all, addVideo };
