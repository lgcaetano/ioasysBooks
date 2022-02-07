import styled from "styled-components";

const labelDown = `
    top: calc(30px - 0.5em);
`
const labelUp = `
    font-size: 0.8em;
    top: 8px;
`



const StyledInput = styled.input`
    font-family: 'Heebo';
    box-sizing: border-box;
    height: 60px;
    width: 368px;
    background-color: ${({ theme }) => theme.backgrounds.input};
    backdrop-filter: blur(2px);
    border-radius: 4px;
    border: none;
    outline: none;
    padding: 28px 0px 8px 16px;
    font-size: 16px;
`

const Label = styled.label`
    color: ${({ theme }) => theme.colors.opaqueWhite};
    position: absolute;
    left: 16px;
    transition: 300ms all;
    ${props => props.upFlag ? labelUp : labelDown}
` 





export {
    Label,
    StyledInput
}