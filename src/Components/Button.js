import styled from "styled-components"

export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1.4rem;
background: transparent;
border: 0.05rem solid #ced6e0;
border-color: ${props => props.cart? "#535c68": "#ced6e0"};
color: ${props=> props.cart? "#222f3e": "#ced6e0"};
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 1s ease-in-out;
&:hover{
    background: ${props => props.cart? "#8395a7": "#dfe4ea"};
    color: ${props => props.cart? "white": "#747d8c"};
}
&:focus{
    outline: none;
}
`