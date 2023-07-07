/**
 *  Common Spinner section 
 * 
 * @version 1.0.0 - 07 Jul 2023 
 * @author  Matias Riquelme - m.riquelmee98@gmail.com 
 * @since   1.0.0 - 07 Jul 2023 
 * 
 */

import styled from 'styled-components';
import {device} from '../../common/styledConstSize';

export const SpinnerContainer = styled.div`
display: ${props => props.notFlex ? 'block': 'flex'};
width: ${props => props.width? props.width : 'initial'};
flex-direction: ${props => props.column ? 'column': 'row'};
justify-content: ${props => props.justifyContent? props.justifyContent: 'initial'};
align-items: ${props => props.alignItems? props.alignItems: 'initial'};
align-self: ${props => props.alignSelf? props.alignSelf: 'initial'};
margin-top: ${props => props.marginTop? props.marginTop: 'initial'};
margin-right: ${props => props.marginRight? props.marginRight: 'initial'};
margin-bottom: ${props => props.marginBottom? props.marginBottom: 'initial'};
margin-left: ${props => props.marginLeft ? props.marginLeft: 'initial'};
border: ${props => props.border ? '0.1rem solid #E2E8EE': 'none'};
border-right: ${props => props.borderRight ? '0.1rem solid #E2E8EE' : 'none'}; I
padding: ${props => props.padding ? props.padding: 'initial'};


section article {
    border-top: solid 1px #545454;
    padding-bottom: 30px;
  }
& .u-bounce {
  animation: bounce 1000ms infinite;
  //animation-timing-function: cubic-bezier(0,1.28,0,1.27);
}

& .u-flash {
  animation: flash 3000ms infinite;
}

& .u-rubber-band {
  animation: rubberBand 1200ms infinite;
}

& .u-flip {
  animation: flip 1400ms infinite;
  animation-timing-function: cubic-bezier(.1,.67,.88,.34);
}

& .u-tada {
  animation: tada 1200ms infinite;
}

& .u-pulse {
  animation: pulse 1000ms infinite;
}

& .u-swing {
  animation: swing 3000ms infinite;
}




&.u-text-center {text-align: center;}

/* Pokeball draw code */
// Size variable to keep all proportional if manipulate it

& .o-pokeball {
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border: solid (50px/25) black;
  position: relative;    
  background: linear-gradient(to bottom, #EEEEEE 0%,#FFFFFF 100%);;
  margin: 10px auto;
  
  & :before,
  & :after{
    content: "";
    display: block;
  }
  
  &,
  & :before,
  & :after{
    transition: all 600ms cubic-bezier(.67,.4,.36,.75);
  }
  
  &:before {
    width: 50px;
    height: (50px/2) -(50px/25/2);
    border-bottom: solid (50px/25) black;
    border-radius: (50px/2) (50px/2) 0 0;
    background: linear-gradient(to bottom, #d10000 0%,#ff0000 50%);
  }
  
  &:after {
    content: "";
    width: 50px/5;
    height: 50px/5;
    background: linear-gradient(to bottom, #fff 0%,#ccc 100%);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    border-radius: 50%;
    box-shadow: 0 0 0 (50px/50) black,
                0 0 0 (50px/25) #ddd,
                0 0 0 (50px/14) black,
                0 0 (50px/10) (50px/17) rgba(0,0,0,0.4);
  }
}
`