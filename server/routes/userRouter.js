const express = require('express');
const router = express.Router();
const User = require("../schemas/userSchema");
const mongoose = require('mongoose');
const userController = require('../controller/userController'); 

// router.get('/', (req, res)=>{

// })

router.post('/signup', userController.createUser);

router.post('/login', userController.loginUser);

module.exports = router;