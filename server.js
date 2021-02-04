const express = require ('express');
const methodOverride = require('method-override');
const routes = require('./routes');
const app = express(); // app is an object


// middleware
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

app.use(express.static("public"));

app.use("/horses", routes.horses);
app.use("/trainers", routes.trainers);

app.get('/', (req,res) => { 
    res.render('trainers/index.ejs');
})


app.listen(process.env.PORT || 3000, () => {
    console.log("I am listening");
});