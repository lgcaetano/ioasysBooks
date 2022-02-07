import StyledLogin from "./styles"
import logoImg from "../../assets/logos/Logo.png"
import Input from "../../components/Input"
import { useState } from "react"
import Tooltip from "../../components/Tooltip"
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const fakeFetch = (delay) => new Promise((resolve) => setTimeout(() => resolve(
    {
        error: "Email e/ou senha incorretos"
    }
), delay))




const Login = () => {

    const [errorFlag, setErrorFlag] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [loading, setLoading] = useState(false)

    const loaderStyles = css`
        opacity: ${loading ? "1" : "0"};
        position: relative;
        top: -80px;
        left: 160px;
        @media(max-width: 600px){
            left: 0;
        }
        z-index: 0;
    `

    const simulateSubmit = async (e) => {
        e.preventDefault()
        setErrorFlag(false)
        setLoading(true)
        let json = await fakeFetch(1000)
        setLoading(false)
        if(json.error){
            setErrorFlag(true)
            setErrorMessage(json.error)
        }
    } 


    return (
        <StyledLogin>
            <form action="#" onSubmit={simulateSubmit}>
                <div className="title">
                    <img src={logoImg} alt="" />
                    <span>Books</span>
                </div>
                <Input type="email" name="email" id="email" label="E-mail"/>
                <Input type="password" name="password" id="password" label="Senha" submitButton={true}/>
                <Tooltip message={errorMessage} show={errorFlag}></Tooltip>
                <ClipLoader css={loaderStyles} color="lime"></ClipLoader>
            </form>
        </StyledLogin>
    )
}

export default Login