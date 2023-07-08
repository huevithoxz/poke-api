import { List } from './components/List';
import { useEffect } from 'react';
import { addList, spinnerLoad } from './redux/pokemonSlice';
import { useDispatch } from 'react-redux';

/**
 *  Common  section
 *
 * @version 1.0.0 - 07 Jul 2023
 * @author  Matias Riquelme - m.riquelmee98@gmail.com
 * @since   1.0.0 - 07 Jul 2023
 *
 */

function App() {
  const dispatch = useDispatch();
  // create a function to shuffle a list
  function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }
  /**
   * init app and get the type water pokemon
   */
  useEffect(() => {
    dispatch(spinnerLoad(true));
    setTimeout(() => {
      fetch('https://pokeapi.co/api/v2/type/water/')
        .then((response) => response.json())
        .then((data) => dispatch(addList(shuffle(data))))
        .catch((error) => console.log(error));
    }, 4000);
  }, []);

  return <List />;
}

export default App;
