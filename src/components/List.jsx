import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { voidList } from '../redux/pokemonSlice';
import { useDispatch } from 'react-redux';
import { ListContainer,ImgContainer } from './ListStyled';
import Spinner from './Spinner/Spinner';
import { Button, Typography } from '@mui/material';
import LandingError from './LandingVoid/LandingError';
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
  const spinn = useSelector((state) => state.pokemons.spinnerLoader);

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
  // marginLeft={'1.6rem'} marginRight={'1.6rem'} padding={'0.8rem'}
  return (
    <ListContainer marginTop={'10rem'}>
      <ListContainer column width={'auto'}>
      {show &&  <ListContainer justifyContent={'space-evenly'}><Typography variant='h6' gutterBottom>
                          Poke List
                        </Typography></ListContainer>}
        <ListContainer>
        
          <ol>
            {show &&
              imgList.map((poke, i) => {
                const uri = poke.sprites.front_shiny;
                return (
                  <li>
                    <ListContainer key={i} border borderR back padding={'8px'}>
                      <ListContainer column font>
                        <Typography variant='h5' gutterBottom>
                          {poke.name}
                        </Typography>
                        <Typography variant='h5' gutterBottom>
                          #{poke.id}
                        </Typography>
                      </ListContainer>
                      <ImgContainer>{poke.sprites !== undefined && <img src={uri} />}</ImgContainer>
                      
                      
                    </ListContainer>
                  </li>
                );
              })}
          </ol>

          {spinn && <Spinner />}
          {!spinn && !show && <ListContainer border borderR back padding={'8px'} column><LandingError />   <Typography variant='h5' gutterBottom>
                          Por favor llene la lista
                        </Typography></ListContainer>  }
        </ListContainer>
        <ListContainer wid={'50%'} justifyContent={'space-evenly'} marginTop={'2rem'}>
          {!spinn && (
            <Button
              onClick={() => {
                clearList();
              }}
              variant='contained'
            >
             {show ? 'Clear List': 'Fill List'}
            </Button>
          )}
        </ListContainer>
      </ListContainer>
    </ListContainer>
  );
};
