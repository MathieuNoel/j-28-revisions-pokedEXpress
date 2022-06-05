const dataMapper = require('../dataMapper');

const detailController = {

  /**
   * find a pokemon by its id and show it in the detail page
   * @param {request} req 
   * @param {response} res 
   */
  getDetail:async(req, res) =>{
    const pokemonId = +req.params.pokemonId    
    try {
      const getDetailById = await dataMapper.getPokemonById(pokemonId) 
      if (getDetailById.length > 1) {
        getDetailById[0].second_name = getDetailById[1].name;
        getDetailById[0].second_color = getDetailById[1].color;
    }; 
          
      res.render('detailPage', {
        pokemon: getDetailById[0],
        // types:  [getDetailById.name, getDetailById.color]
       })
    } catch (error) {
      res.status(500).send(error)
    }
  }
}

module.exports = detailController;