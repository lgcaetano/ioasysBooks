import Button from "../Button"
import { StyledInput, Label } from "./styles"
import { useState, useRef } from "react"

const Input = (props) => {

    const inputRef = useRef()

    const emptyInput = () => {

        if(!inputRef.current)
            return true


        if(inputRef.current.value.length <= 0)
            return true
        return false
    }

    const [focus, setFocus] = useState(false)  

    console.log(focus || !emptyInput())


    return (
      <div className="input-container">
        <StyledInput
          ref={inputRef}
          {...props}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        {props.submitButton ? 
            <Button type="submit">
                Entrar
            </Button>
            :
            ""    
        }
        <Label upFlag={focus || !emptyInput()}>
            {props.label}
        </Label>
      </div>
    );
}

export default Input