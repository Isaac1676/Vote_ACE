const express = require('express');
const { createPerson, voteForCandidate } = require('../controllers/personController');
const router = express.Router();

// Routes pour les personnes
router.post('/', createPerson);  // Route pour créer une personne
router.post('/:personId/vote/:candidateId', voteForCandidate);  // Route pour voter pour un candidat

// Exporter les routes des personnes
module.exports = router;
