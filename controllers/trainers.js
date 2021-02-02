const Trainer = require("../models").Trainer;
const Horse = require("../models").Horse;

// index
const index = (req, res) => {
    res.render("trainers/index.ejs")
};

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







// renderProfile
const renderProfile = (req, res) => {
    Trainer.findByPk(req.params.index, {
        include: [{
            model: Trainer,
            attributes: ['name']
        }] 
    })
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
    index
}