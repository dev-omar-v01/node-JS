const express = require('express');
const { getUsers, saveUsers } = require('../controllers/user.controller');
const router = express.Router();


router.get('/user',getUsers);

router.post('/user',saveUsers);

module.exports = router;