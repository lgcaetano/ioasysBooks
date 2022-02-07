import Login from "./pages/Login"
import Home from "./pages/Home"
import { Routes as Switch, Route } from "react-router-dom"

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact element={<Home/>} />
            <Route path="/login" exact element={<Login/>} />
        </Switch>
    )
}