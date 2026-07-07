const express = require('express')
const {handleGetItems,handleGetItemsById} = require('../controller/items')

const router = express.Router();

router.get('/',handleGetItems)

router.get('/:id',handleGetItemsById)

module.exports = router;