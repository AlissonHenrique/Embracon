import { BrowserRouter } from "react-router-dom";
import {Router} from "./routes";
import { ThemeProvider, DefaultTheme } from 'styled-components';  
import light from './styles/themes/light';
import dark  from  './styles/themes/dark';  
import GlobalStyle from './styles/global';
import usePeristedState from './utils/usePersistedState'

function App() {
    const [theme, setTheme] = usePeristedState<DefaultTheme>('theme', light);

    const toggleTheme = () => {
      setTheme(theme.title === 'light' ? dark : light);
    };

  return (
   <> 
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <GlobalStyle />
            <Router toggleTheme={toggleTheme}/>
        </BrowserRouter>
    </ThemeProvider>
   </>
  )
}

export default App
