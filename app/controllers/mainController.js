const dataMapper = require('../dataMapper')


const accueil = {

  /**
   * show the homePage with all pokemon of data base 
   * @param {request} req 
   * @param {response} res 
   */
  home: (req, res) => {  
    dataMapper.getAllPokemon( (err, results) =>{
      if(err) {
        console.error(err);
        return
      }      
      res.render('homePage', {allPokemon : results.rows})
    })
        
  }
}



module.exports = accueil;