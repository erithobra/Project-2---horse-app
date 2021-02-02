const trainers = require("../dummyfolder/models/trainers.js");

// index
const index = (req, res) => {
    res.render("trainers/index.ejs")
};

// renderProfile
const renderProfile = (req, res) => {
    res.render("trainers/profile.ejs", {
        trainer: trainers[req.params.index]
    });
};



module.exports = {
    renderProfile,
    index
}