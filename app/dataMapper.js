
const dataBase = require('./dataBase');

const dataMapper = {

  /**
   * callback function for find all pokemon
   * @param {callback} callback 
   */
  getAllPokemon:function(callback)  {
    const query = {
      text : `SELECT * FROM "pokemon"`
    };
    dataBase.query(query, callback);  
  },

  /**
   * callback function for find all pokemon's types
   * @param {callback} callback 
   */
  getTypeOfPokemons:function(callback) {
    const query ={
      text : 'SELECT * FROM "type"',      
    }
    dataBase.query(query, callback);    
  },

  /**
   * find all pokemon by one type
   * @param {req.params.typeId} typeId 
   * @returns the result of sql request from two table
   */
  async getPokemonByType(typeId) {    
    const query = {
      text: `SELECT p.id, p.nom, p.numero, pt.pokemon_numero 
      FROM
       pokemon AS p 
       JOIN 
       pokemon_type AS pt 
       ON 
       p.numero = pt.pokemon_numero 
       WHERE 
       pt.type_id = $1`,
      values: [typeId],
    };
    const results = await dataBase.query(query);    
    return results.rows;
  },

  /**
   * find one pokemon by id  
   * @param {req.params.id} id 
   * @returns the result of sql request from three table
   */
  async getPokemonById(id) {
    const query = {
      text: `SELECT * FROM 
      pokemon AS p 
      JOIN 
      pokemon_type AS pt 
      ON 
      p.numero = pt.pokemon_numero 
      JOIN 
      type AS t 
      ON 
      pt.type_id = t.id WHERE p.id = $1`,
      values: [id] 
    }    
    const results = await dataBase.query(query);    
    return results.rows
  }
}

module.exports = dataMapper;