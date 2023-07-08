import React from 'react';
import {LandingErrorContainer} from './LandingErrorStyled';
import pika from '../../assets/pika.gif'
const LandingError = () => {
  return (
    <LandingErrorContainer>
        <img src={pika}/>
       
    </LandingErrorContainer>
  )
}

export default LandingError