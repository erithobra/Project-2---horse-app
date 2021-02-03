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
    Trainer.findByPk(req.params.index, {
        include: [Horse]
    })
    .then(trainerProfile => {
        Horse.findAll()
        .then(allHorses => {
            res.render("trainers/profile.ejs", {
                trainer: trainerProfile,
                horse: allHorses
            })
        })
    })
}


const editTrainer = (req,res) => {

    if(req.body.addOrRemove == "add") { // if statement allows for adding or removing trainers from horses
        Trainer.update(req.body, { 
            where: {id: req.params.index},
            returning: true
        })
        .then((updateTrainer) => {
            Horse.findByPk(req.body.horse).then((foundHorse) => {
                Trainer.findByPk(req.params.index).then((foundTrainer) => {
                    foundTrainer.addHorse(foundHorse);
                    res.redirect(`/trainers/profile/${req.params.index}`)
                    res.redirect(`/trainers/profile/${req.params.index}`)
                })
            })
        });
    } else { // if "add" was not selected, then other choice is remove, which triggers this loop to remove trainer
        Trainer.update(req.body, { 
            where: {id: req.params.index},
            returning: true
        })
        .then((updateTrainer) => {
            Horse.findByPk(req.body.horse).then((foundHorse) => {
                Trainer.findByPk(req.params.index).then((foundTrainer) => {
                    foundTrainer.removeHorse(foundHorse);
                    res.redirect(`/trainers/profile/${req.params.index}`)
                    res.redirect(`/trainers/profile/${req.params.index}`)
                })
            })
        });
    }
}
const deleteTrainer = (req, res) => {
    Trainer.destroy({ where: {id: req.params.index} })
    .then(() => {
        res.redirect('/trainers/')
    });
};



module.exports = {
    renderProfile,
    login,
    renderLogin,
    renderSignup,
    signup,
    editTrainer,
    index,
    deleteTrainer
}