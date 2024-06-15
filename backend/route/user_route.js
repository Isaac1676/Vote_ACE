const express = require("express");
const { getUsers, getUser, createUser, getAce, getUserByPhone, deleteUsers } = require("../controllers/user_controller.js");
const router = express.Router();


router.get('/ace', getAce);

router.get('/phone/:phoneNumber', getUserByPhone);

router.get('/', getUsers);

router.get('/:id', getUser);

router.post('/', createUser);

router.delete('/', deleteUsers);

module.exports = router;