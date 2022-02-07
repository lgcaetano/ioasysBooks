import styled from "styled-components"
import bkgImg from "../../assets/backgrounds/background.png"
import theme from "../../styles/theme"

const StyledLogin = styled.div`

    font-family: 'Heebo';
    box-sizing: border-box;
    background-image: url(${bkgImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    min-height: 100vh;
    display: flex; 
    color: ${({ theme }) => theme.colors.white};
    justify-content: flex-start;
    align-items: center;

    @media(max-width: 600px){
        justify-content: center;
    }

    form {
        .title{
            margin-bottom: 30px;
            display: flex;
            gap: 20px;
            align-items: center;
            span{
                font-weight: 300;
                font-size: 28px;
            }
        }
        box-sizing: border-box;
        width: 50%;
        height: 100%;
        display: flex;
        padding-left: 115px;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 20px; 

        @media(max-width: 600px){
            width: 100%;
            padding: 0;
            align-items: center;
        }
    }

`

export default StyledLogin