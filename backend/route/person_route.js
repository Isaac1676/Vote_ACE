const express = require("express");
const User = require("../models/user_model.js");
const { getUsers, getUser, createUser } = require("../controllers/person_controller.js");
const router = express.Router();

router.get('/', getUsers);

router.get('/:id', getUser);

router.post('/', createUser);

module.exports = router;