/**
 *  Common Spinner section 
 * 
 * @version 1.0.0 - 07 Jul 2023 
 * @author  Matias Riquelme - m.riquelmee98@gmail.com 
 * @since   1.0.0 - 07 Jul 2023 
 * 
 */

import styled from 'styled-components';


export const SpinnerContainer = styled.div`
display: ${props => props.notFlex ? 'block': 'flex'};
width: ${props => props.width? props.width : 'initial'};
flex-direction: ${props => props.column ? 'column': 'row'};
justify-content: ${props => props.justifyContent? props.justifyContent: 'initial'};
align-items: ${props => props.alignItems? props.alignItems: 'initial'};
align-self: ${props => props.alignSelf? props.alignSelf: 'initial'};
margin-top: ${props => props.margintop? props.marginTop: 'initial'};
margin-right: ${props => props.marginRight? props.marginRight: 'initial'};
margin-bottom: ${props => props.marginBottom? props.marginBottom: 'initial'};
margin-left: ${props => props.marginLeft ? props.marginLeft: 'initial'};
border: ${props => props.border ? '0.1rem solid #E2E8EE': 'none'};
border-right: ${props => props.borderRight ? '0.1rem solid #E2E8EE' : 'none'}; I
padding: ${props => props.padding ? props.padding: 'initial'};
`