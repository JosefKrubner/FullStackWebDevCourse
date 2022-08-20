const express = require('express')
const router = express.Router() //zavolání routeru


//Jako výchozí stránka se použije view "index"
router.get('/', (req, res) => {
    res.render('index') //renderování stránky index
})

module.exports = router //export routeru = propojení se server.js