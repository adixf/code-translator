const express = require('express')
const { translate } = require('../controllers/translate')

const router = express.Router()

router.post('/', async (req, res) => {
    const {text, from, to} = req.body
    const translation = await translate(text, from, to)
    res.json({translation})
})

module.exports = router