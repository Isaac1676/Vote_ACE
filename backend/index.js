const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const path = require('path');
const userRoute = require("./route/user_route.js");
const candidatRoute = require("./route/candidat_route.js");
const voteRoute = require("./route/vote_route.js");
const { PORT } = require("./config.js");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extends: false}));
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// Routes
app.use('/users', userRoute);
app.use('/candidats', candidatRoute);
app.use('/votes', voteRoute);


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