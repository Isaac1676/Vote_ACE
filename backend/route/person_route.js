const express = require("express");
const { getUsers, getUser, createUser, getAce, getUserByPhone } = require("../controllers/person_controller.js");
const router = express.Router();


router.get('/ace', getAce);

router.get('/phone/:phoneNumber', getUserByPhone);

router.get('/', getUsers);

router.get('/:id', getUser);

router.post('/', createUser);

module.exports = router;