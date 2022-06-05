const express = require('express');

const router = express.Router();

const mainController = require('./controllers/mainController');
const typesController = require('./controllers/typesController');
const detailController = require('./controllers/detailController');

router.get('/', mainController.home);
router.get('/:typeId', typesController.getPokemonOfType)
router.get('/typesPage', typesController.getTypesOfPokemon);
router.get('/detailPage/:pokemonId', detailController.getDetail)

module.exports = router;