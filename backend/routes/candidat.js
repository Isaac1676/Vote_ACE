const express = require('express');
const { createCandidate } = require('../controllers/candidatController');
const router = express.Router();

// Route pour créer un candidat
router.post('/', createCandidate);

// Exporter les routes des candidats
module.exports = router;
