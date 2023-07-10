import React, { useRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { voidList } from '../redux/pokemonSlice';
import { useDispatch } from 'react-redux';
import { Tilt } from 'react-tilt';
import { ListContainer, ImgContainer } from './ListStyled';
import Spinner from './Spinner/Spinner';
import { Button, Typography } from '@mui/material';
import LandingError from './LandingVoid/LandingError';
import useGetCharacters from '../customHook/pokemonService';
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
  const { getPokemons } = useGetCharacters();

  /**
   * stracting url and name to pokemon water
   */
  useEffect(() => {
    getPokemons();
  }, []);
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
  const cursorRef = useRef(null);
  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;
  const speed = 0.01;

  const animate = () => {
    let distX = mouseX - cursorX;
    let distY = mouseY - cursorY;

    cursorX = cursorX + distX * speed;
    cursorY = cursorY + distY * speed;

    cursorRef.current.style.left = cursorX + 'px';
    cursorRef.current.style.top = cursorY + 'px';

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    animate();
  }, []);

  return (
    <ListContainer margintop={'10rem'} column={'true'}>
      <div className='bg__gradient' ref={cursorRef}></div>
      {show && (
        <ListContainer justifycontent={'space-evenly'}>
          <Typography variant='h6' gutterBottom>
            Poke List
          </Typography>
        </ListContainer>
      )}
      <ListContainer justifycontent='center' wrap={'true'}>
        {show &&
          imgList.map((poke, i) => {
            const uri = poke.sprites.front_shiny;
            return (
              <ListContainer key={i}  margintop='2rem' marginleft={'1.6rem'} >
                <Tilt
                  className='card'
                  options={{
                    maxTilt: 15,
                    perspective: 1500,
                    easing: 'cubic-bezier(.03,.98,.52,.99)',
                    speed: 500,
                    glare: false,
                    maxGlare: 0.2,
                    scale: 1.01,
                  }}
                >
                  <ListContainer column={'true'} marginbottom={'4rem'} marginleft={'1.4rem'}>   <Typography variant='h5' gutterBottom>
                    {poke.name}
                  </Typography>
                  <Typography variant='h5' gutterBottom>
                    #{poke.id}
                  </Typography></ListContainer>
               

                  <ImgContainer>{poke.sprites !== undefined && <img src={uri} />}</ImgContainer>
                </Tilt>
              </ListContainer>
            );
          })}
        {spinn && <Spinner />}
        {!spinn && !show && (
          <ListContainer border={'true'} borderr={'true'}  back={'true'}  padding={'8px'} column={'true'}>
            <LandingError />{' '}
            <Typography variant='h5' gutterBottom>
              Por favor llene la lista
            </Typography>
          </ListContainer>
        )}
      </ListContainer>
      <ListContainer wid={'50%'} justifycontent='space-around' margintop={'2rem'}>
        {!spinn && (
          <ListContainer>
            {' '}
            <Button
              onClick={() => {
                clearList();
              }}
              variant='contained'
            >
              {show ? 'Clear List' : 'Fill List'}
            </Button>
          </ListContainer>
        )}
      </ListContainer>
    </ListContainer>
  );
};
