import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { voidList } from '../redux/pokemonSlice';
import { useDispatch } from 'react-redux';
import { ListContainer } from './ListStyled';
import Spinner from './Spinner/Spinner';
import { Button, Card } from '@mui/material';
/**
 *  List of pokemons
 *
 * @version 1.0.0 - 07 Jul 2023
 * @author  Matias Riquelme - m.riquelmee98@gmail.com
 * @since   1.0.0 - 07 Jul 2023
 *
 */
export const List = () => {
  const dispatch = useDispatch();
  const [toggleView, setToggleView] = useState(false);
  const [imgList, setImgList] = useState([]);
  const pokemon = useSelector((state) => state.pokemons);
  const show = useSelector((state) => state.pokemons.showList);

  /**
   * stracting url and name to pokemon water
   */
  useEffect(() => {
    const firstList = pokemon.pokemon.map((poke, i) => {
      return i < 10 && poke.pokemon;
    });
    const resumeList = firstList.filter((item) => item.name !== undefined);
    if (imgList.length === 0) {
      callMultipleImage(
        resumeList.map((item) => {
          return item.url;
        })
      );
    }
  }, [pokemon]);

  const makeCard = (array) => {
    return <div> {}</div>;
  };

  /**
   * getting info pokemon by url
   * @param url : string
   */
  const callMultipleImage = (url) => {
    url.forEach((element) =>
      fetch(`${element}`)
        .then((response) => response.json())
        .then((data) => setImgList((imgList) => [...imgList, data]))
    );
  };
  /**
   * shows the pokemon list
   */
  const clearList = () => {
    setToggleView(!toggleView);
    dispatch(voidList(toggleView));
  };

  return (
    <ListContainer column width={'auto'} >
      <ListContainer>
        {show &&
          imgList.map((poke, i) => {
            const uri = poke.sprites.front_shiny;
            return (
              <ListContainer key={i} marginLeft={'1.6rem'} marginRight={'1.6rem'} padding={'0.8rem'} border borderR back>
                
                {poke.name}
                {poke.id}
                {poke.sprites !== undefined && <img src={uri} />}
               
               
              </ListContainer>
            );
          })}
        {!show && <Spinner />}
      </ListContainer>
      <Button
        onClick={() => {
          clearList();
        }}
        disabled={!show}
        variant='contained'
      >
        Clear list
      </Button> 
     
    </ListContainer>
  );
};
