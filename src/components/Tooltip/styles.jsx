import styled from "styled-components";

const StyledTooltip = styled.div`
    opacity: ${props => props.show ? 1 : 0};
    transition: 600ms all;
    width: max-content;
    background: rgba(255, 255, 255, 0.4);
    position: relative;
    color: white;
    font-weight: bold;
    font-size: 16px;
    padding: 16px;
    border-radius: 4px;
    z-index: 10;
    @media(max-width: 600px){ 
        right: 68px;
    }
    .triangle{
        opacity: ${props => props.show ? 1 : 0};
        transition: 600ms all;
        position: absolute;
        top: -8px;
        left: 20px;
        border-bottom: 8px solid rgba(255, 255, 255, 0.4);;
        border-right: 8px solid transparent;
        border-left: 8px solid transparent;
    }
`

export {
    StyledTooltip
}