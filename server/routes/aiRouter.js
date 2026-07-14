const express = require('express')
const {handleAiSuggestion} = require('../controller/aiController')

const router = express.Router();

router.post('/suggest',handleAiSuggestion);

module.exports = router