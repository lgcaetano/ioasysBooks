import styled from "styled-components"

const StyledButton = styled.button`
    font-family: 'Heebo';
    position: absolute;
    right: 10px;
    top: 10px;
    height: 40px;
    background: white;
    color: #B22E6F;
    border-radius: 9999px;
    border: none;
    padding: 8px 20px;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
    transition: 500ms all;
    &:hover{
        background-color: #B22E6F;
        color: white;
    }
`

export default StyledButton