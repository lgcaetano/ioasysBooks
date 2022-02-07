import { StyledTooltip } from "./styles"

const Tooltip = (props) => {
    return (
        <StyledTooltip show={props.show}>
            <div className="triangle"></div>
            {props.message}
        </StyledTooltip>
    )
}

export default Tooltip