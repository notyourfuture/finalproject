import MyRotes from "./MyRotes";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <MyRotes />
    </ThemeProvider>
  );
}

export default App;
