/**
 *  getPokemons services
 *
 * @version 1.0.0 - 07 Jul 2023
 * @author  Matias Riquelme - m.riquelmee98@gmail.com
 * @since   1.0.0 - 07 Jul 2023
 *
 */
import axios from 'axios';
import { addList, spinnerLoad } from '../redux/pokemonSlice';
import { useDispatch } from 'react-redux';

const useGetCharacters = () => {
  const dispatch = useDispatch();

  async function getPokemons() {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/type/water/');
      const result = response.data;
      dispatch(spinnerLoad(true));
      setTimeout(() => {
        dispatch(addList(result));
      }, 4000);
    } catch (error) {
      console.log(error, 'errror');
    }
  }

  return { getPokemons };
};

export default useGetCharacters;
