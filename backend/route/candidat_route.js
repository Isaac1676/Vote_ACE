const express = require("express");
const { getCandidat, getCandidats, createCandidat, deleteCandidats } = require("../controllers/candidat_controller.js");
const router = express.Router();

router.get('/', getCandidats);

router.get('/:id', getCandidat);

router.post('/', createCandidat);

router.delete('/all', deleteCandidats);

module.exports = router;