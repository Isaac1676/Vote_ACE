const express = require("express");
const { castVote, getVotes, getVote } = require("../controllers/vote_controller.js");
const router = express.Router();

router.get('/', getVotes);

router.get('/:id', getVote);

router.post('/', castVote);

module.exports = router;