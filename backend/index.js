const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const bodyParser = require('body-parser')
const path = require('path');
const userRoute = require("./route/user_route.js");
const candidatRoute = require("./route/candidat_route.js");
const voteRoute = require("./route/vote_route.js");
require('dotenv').config();
require('dotenv').config({ path: 'backend/.env' });

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extends: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/images', express.static(path.join(__dirname, 'public/images')));
const PORT = process.env.PORT || 2013;
const MONGODB_URI = process.env.MONGODB_URI;

console.log(MONGODB_URI);

// Routes
app.use('/users', userRoute);
app.use('/candidats', candidatRoute);
app.use('/votes', voteRoute);
app.use('/images', express.static(path.join(__dirname, 'public/images')));


app.get('/', (req, res) => {
    res.send("HELLO this is a NODE API");
});


mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log("Connected");
        app.listen(PORT, () => {
            console.log(`APP on ${PORT}`)
        });
    })
    .catch(() => {
        console.log("Connection failed")
    })