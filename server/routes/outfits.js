const express = require('express')
const {handleGetOutfit,handlePostOutfit,handleDeleteOutfit} = require('../controller/outfits')
const checkAuth = require('../middleware/auth')

const router = express.Router();

router.route('/').
get(checkAuth,handleGetOutfit).
post(checkAuth,handlePostOutfit)

router.delete('/:id',checkAuth,handleDeleteOutfit)

module.exports = router;