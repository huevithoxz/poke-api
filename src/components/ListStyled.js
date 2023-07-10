/**
 *  Common Spinner section 
 * 
 * @version 1.0.0 - 07 Jul 2023 
 * @author  Matias Riquelme - m.riquelmee98@gmail.com 
 * @since   1.0.0 - 07 Jul 2023 
 * 
 */

import styled from 'styled-components';


export const ListContainer = styled.div`
display: ${props => props.notFlex ? 'block': 'flex'};
width: ${props => props.width? props.width : 'initial'};
height: ${props => props.height? props.height : 'initial'};
flex-direction: ${props => props.column ? 'column': 'row'};
justify-content: ${props => props.justifycontent? props.justifycontent: 'initial'};
align-items: ${props => props.alignItems? props.alignItems: 'initial'};
align-self: ${props => props.alignSelf? props.alignSelf: 'initial'};
margin-top: ${props => props.margintop? props.margintop: 'initial'};
margin-right: ${props => props.marginRight? props.marginRight: 'initial'};
margin-bottom: ${props => props.marginbottom? props.marginbottom: 'initial'};
margin-left: ${props => props.marginleft ? props.marginleft: 'initial'};
border: ${props => props.border ? '0.1rem solid gray': 'none'};
border-radius: ${props => props.borderr ? '1.2rem': 'none'};
background-color:${props => props.back ? '#2196f3': 'none'};
padding: ${props => props.padding ? props.padding: 'initial'};
font-size: ${props => props.font  ? '20px' : 'initial'};
flex-wrap:  ${props => props.wrap  ? 'wrap': 'initial'};
& .MuiTypography-h5{
    font-size:20px;
    color:#a8dcd9;
    
}
& .MuiButton-containedPrimary{
    font-size:16px;
    background-color:transparent;
}
ol{
    width: min(60rem, 90%);
    margin-inline: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;
    list-style: none;
    counter-reset: stepnr;
};
body {
    background-color: #15191f;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    gap: 3em;
    
    height: 100vh;
    width: 100vw;
    
    font-family: 'Montserrat';
  }
  
 & .bg__gradient {
    height: 800px;
    width: 800px;
    background-image: linear-gradient(90deg, #eb3434, #eb5e34, #eb8334, #eba434, #ebcc34, #ebeb34, #c3eb34, #89eb34, #58eb34, #34eb52, #34ebcc, #34d5eb, #34a8eb, #346beb, #3734eb, #7734eb, #a834eb, #eb34c3, #eb3489, #eb3461);
    filter: blur(500px);
    border-radius: 100%;
    background-size: 1000% 100%;
    
    animation: gradient 10s infinite ease-out;
    
    position: absolute;
    transform: translateX(-50%) translateY(-50%);
    
    z-index: 0
  }
  
  @keyframes gradient {
    0%{background-position:0% 50%}
    100%{background-position:100% 100%}
  }
  
  
  
 & .card {
    height: 150px;
    width: 200px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: rgb(255, 255, 255, 50%);
    background-image: linear-gradient(135deg, rgb(255, 255, 255, 15%), rgb(21, 25, 31, 0%));
    transition: all ease;
    padding:8px;
    cursor: pointer;
    
    z-index: 5;
    flex-direction: column;
    align-items: flex-start;
  }
  
  &.card:hover {
    filter: drop-shadow(0 0 0px rgb(255, 255, 255, 60%));
    color: rgb(255, 255, 255, 80%);
  }
  
  
  @media only screen and (max-width: 600px) {
    body {
      flex-direction: column;
    }
  }
  
  
  

`
export const ImgContainer = styled.div`
position:relative;
img{
    width: 12rem;
    height: 12rem;
    position: absolute;
    bottom: -45px;
    right: 0px;
    left: 50px;
}
`