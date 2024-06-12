const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./route/person_route.js");
const Candidat = require("./models/candidat_model.js");
const { PORT } = require("./config.js");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({extends: false}));

// Routes
app.use('/users', userRoute)
app.use('/users', userRoute)



app.get('/', (req, res) => {
    res.send("HELLO this is a NODE API");
});


mongoose.connect("mongodb+srv://admin_isaac:D2F5d0Ya9i6RBIGA@ace-backend.sjzi9gr.mongodb.net/?retryWrites=true&w=majority&appName=ACE-Backend")
.then(() => {
    console.log("Connected");
    app.listen(PORT, () => {
        console.log(`APP on ${PORT}`)
    });
})
.catch(() => {
    console.log("Connection failed")
})