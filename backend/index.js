const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 2013;

app.listen(PORT, ()=>{
    console.log("Serveur en marche...")
})
