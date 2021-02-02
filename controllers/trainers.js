const Trainer = require("../models").Trainer;
const Horse = require("../models").Horse;

// index
const index = (req, res) => {
    res.render("trainers/index.ejs")
};

// login
const renderLogin = (req, res) => {
    res.render('trainers/login.ejs')
}

const login = (req, res) => {
    Trainer.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    })
    .then(foundTrainer => {
        res.redirect(`/trainers/profile/${foundTrainer.id}`);
    })
}

// signup
const renderSignup = (req, res) => {
    res.render("trainers/signup.ejs")
}

const signup = (req, res) => {
    Trainer.create(req.body)
    .then(newTrainer => {
        res.redirect(`/trainers/profile/${newTrainer.id}`);
    })
};

// renderProfile
const renderProfile = (req, res) => {
    console.log("HERE IS A CONSOLE LOG")
    Trainer.findByPk(req.params.index)
    .then(trainerProfile => {
        res.render('trainers/profile.ejs', {
            trainer: trainerProfile
        })
    })
}



module.exports = {
    renderProfile,
    login,
    renderLogin,
    renderSignup,
    signup,
    index
}