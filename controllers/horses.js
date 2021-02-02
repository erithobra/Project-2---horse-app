const horses = require('../models/horses.js');

// index route
const index = (req, res) => {
    res.render("index.ejs")
};


// render new route
const renderNew = (req, res) => {
    res.render("new.ejs", {
    })
}

// show route
const show = (req, res) => {
    res.render("show.ejs", {
        horse: horses[req.params.index]
    });
}



module.exports = {
    index,
    renderNew,
    show,
}