const express = require("express");
const { getCandidat, getCandidats, createCandidat } = require("../controllers/candidat_controller.js");
const router = express.Router();

router.get('/', getCandidats);

router.get('/:id', getCandidat);

router.post('/', createCandidat);

module.exports = router;