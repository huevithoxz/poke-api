/**
 *  getPokemons services
 * 
 * @version 1.0.0 - 07 Jul 2023 
 * @author  Matias Riquelme - m.riquelmee98@gmail.com 
 * @since   1.0.0 - 07 Jul 2023 
 * 
 */

import axios from "axios"

  /**
   * if we need get more than one service 
   */
const getPokemons = () => {
    
    return axios('https://pokeapi.co/api/v2/type/water/');
}

export default { getPokemons};