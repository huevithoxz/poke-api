import { List } from './components/List';
import { useEffect } from 'react';
import { addList } from './redux/pokemonSlice';
import { useDispatch } from 'react-redux';

/**
 *  Common Spinner section 
 * 
 * @version 1.0.0 - 07 Jul 2023 
 * @author  Matias Riquelme - m.riquelmee98@gmail.com 
 * @since   1.0.0 - 07 Jul 2023 
 * 
 */

function App() {
  const dispatch = useDispatch();
  /**
   * init app and get the type water pokemon
   */
  useEffect(() => {
    setTimeout(() => {
      fetch('https://pokeapi.co/api/v2/type/water/')
      .then((response) => response.json())
      .then((data) => dispatch(addList(data)))
      .catch((error) => console.log(error));
    }, 4000);
 
  }, []);

  return (
    
      <List />
    
  );
}

export default App;
