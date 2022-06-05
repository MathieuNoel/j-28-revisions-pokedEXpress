const dataMapper = require('../dataMapper');


const getTypes = {

  /**
   * for find and show all types on typesPage 
   * @param {request} req 
   * @param {response} res 
   */
  getTypesOfPokemon: (req, res) => {
    dataMapper.getTypeOfPokemons((err, results) =>{
      if(err) {
        console.error(err);
        return
      }
      res.render('typesPage', {allTypes: results.rows})
    })
  },

  /**
   * for find all pokemon selected per types and redirect on home page 
   * @param {request} req 
   * @param {response} res 
   * @param {next} next 
   */
  async getPokemonOfType(req, res, next) {
    const typeId = +req.params.typeId
    try {
      const pokemonsByType = await dataMapper.getPokemonByType(typeId)        
      res.render('homePage', {allPokemon: pokemonsByType})      
    } catch (error) {
      res.status(500).send(error)
    }
    next()
  }
}

module.exports = getTypes;