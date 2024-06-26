const express = require("express");
const upload = require('../mutler');
const { getCandidat, getCandidats, createCandidat, deleteCandidats } = require("../controllers/candidat_controller.js");
const router = express.Router();

router.get('/', getCandidats);

router.get('/:id', getCandidat);

router.post('/', upload.single('photo'), createCandidat);

router.delete('/all', deleteCandidats);

module.exports = router;