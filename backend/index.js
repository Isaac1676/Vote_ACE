const express = require('express');
const fs = require('fs');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 2013;

mongoose.connect(process.env.DATABASE_URI, )
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.listen(PORT, ()=>{
    console.log("Serveur en marche...")
})
