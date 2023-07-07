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
flex-direction: ${props => props.column ? 'column': 'row'};
justify-content: ${props => props.justifyContent? props.justifyContent: 'initial'};
align-items: ${props => props.alignItems? props.alignItems: 'initial'};
align-self: ${props => props.alignSelf? props.alignSelf: 'initial'};
margin-top: ${props => props.marginTop? props.marginTop: 'initial'};
margin-right: ${props => props.marginRight? props.marginRight: 'initial'};
margin-bottom: ${props => props.marginBottom? props.marginBottom: 'initial'};
margin-left: ${props => props.marginLeft ? props.marginLeft: 'initial'};
border: ${props => props.border ? '0.1rem solid gray': 'none'};
border-radius: ${props => props.borderR ? '1.2rem': 'none'};
background-color:${props => props.back ? '#a8dcd9': 'none'};
padding: ${props => props.padding ? props.padding: 'initial'};
overflow: ${props => props.overflow? props.overflow: 'initial'};
`