const express = require ('express');
const methodOverride = require('method-override');
const routes = require('./routes');
const app = express(); // app is an object

const horses = require('./models/horses.js');

// middleware
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

app.use(express.static("public"));


app.post("/horses", (req, res) => {
    res.send("hi");
});



app.get("/horses/", (req, res) => {
    res.send(horses);
});

// app.get("/horses/:index", function(req, res) {
//     res.render("show.ejs", {
//         horse: horses[req.params.index]
//     });
// });

app.listen(3000, () => {
    console.log("I am listening");
});