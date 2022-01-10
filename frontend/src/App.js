import MainRouter from "./MainRouter";
import theme from "./Theme";
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <div>
        <ThemeProvider theme={theme}>
          <MainRouter />
        </ThemeProvider>
    </div>
  );
}

export default App;
