const express = require('express')
const router = express.Router()
const path = require('path')
router.get ('/', (req, res) => {
    res.send ('Hello mundo!')
})

router.get ('/home', (req, res) => {
    res.send ('rota home')
})
router.get ('/teste', (req, res) => {
    res.send ('rota home')
})
router.use (function (req, res, next) {
    res.status(404).send ('rota não encontrada!')
})
module.exports = router 
