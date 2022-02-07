import { Routes } from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyle from "./styles/global"



function App() {
  return (
    <Router>
      <GlobalStyle></GlobalStyle>
      <ThemeProvider theme={theme}>
        <Routes /> 
      </ThemeProvider>
    </Router>
  )
}

export default App;
