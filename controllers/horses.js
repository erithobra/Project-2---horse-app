const Horse = require("../models").Horse;
const Trainer = require("../models").Trainer;

// index route
const index = (req, res) => {
    Horse.findAll()
    .then(horses => {
        res.render("index.ejs", {
            horses: horses
        })
    })
};


// render new route
const renderNew = (req, res) => {
    res.render("new.ejs", {
    })
}

// show route
const show = (req, res) => {
    Horse.findByPk(req.params.index, {
        include : [Trainer]
    })
    .then(horse => {
        res.render("show.ejs", {
            horse: horse
        });
    })
};

const editHorse = (req, res) => {

    Horse.update(req.body, {
        where: {id: req.params.index},
        returning: true
    })
    .then(horse => {
        res.redirect(`/horses/${req.params.index}`)
    
    })
}

const deleteHorse = (req, res) => {
    Horse.destroy({ where: {id: req.params.index} })
    .then(() => {
        res.redirect('/horses/')
    });
};

const createHorse = (req, res) => {
    Horse.create(req.body)
    .then(newHorse => {
        res.render(`show.ejs`, {
            horse: newHorse
        })
    })
};

module.exports = {
    index,
    renderNew,
    show,
    editHorse,
    deleteHorse,
    createHorse

}