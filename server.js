const express = require ('express');
const methodOverride = require('method-override');
const routes = require('./routes');
const app = express(); // app is an object

const horses = require('./models/horses.js');
const trainers = require("./models/trainers.js");

// middleware
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

app.use(express.static("public"));
app.use("/horses", routes.horses);
app.use("/trainers", routes.trainers);



app.listen(3000, () => {
    console.log("I am listening");
});