import React from 'react';
import { SpinnerContainer } from './SpinnerStyled';
import './Spinner.css';

const Spinner = () => {
  return (
    <SpinnerContainer marginTop={'10rem'}>
      
        <div>
          <center>
            <div id='b'>
              <div id='a'></div>
            </div>
          </center>
        </div>
    </SpinnerContainer>
  );
};

export default Spinner;
