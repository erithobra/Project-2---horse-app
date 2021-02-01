const express = require ('express');
const app = express(); // app is an object

const horses = require('./models/horses.js');


app.get("/horses/", (req, res) => {
    res.send(horses);
});

app.get("/horses/:id", function(req, res) {
    res.render("show.ejs", {
        horse: horses[req.params.id]
    });
});

app.listen(3000, () => {
    console.log("I am listening");
});