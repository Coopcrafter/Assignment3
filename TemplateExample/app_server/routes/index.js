var express = require('express')
var router = express.Router()
var ctrlLocations = require('../controllers/locations')

router.get('/', ctrlLocations.home)
router.get('/contact', ctrlLocations.contact)
router.get('/about', ctrlLocations.about)
router.get('/profile', ctrlLocations.profile)
router.get('/game', ctrlLocations.game)
router.get('/dataTest', ctrlLocations.dataTest)
router.get('/color', ctrlLocations.lab4)

module.exports = router