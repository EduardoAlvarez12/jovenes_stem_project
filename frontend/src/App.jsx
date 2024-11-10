import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { HistoryPage } from "./pages/HistoryPage";
import { MemoryPage } from "./pages/MemoryPage";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";



const jov_stem_theme = createTheme({
  palette: {
    indigo: {
      main: "#1c21d1",
      light: "#1c21d1",
      dark: "#1c21d1",
      contrastText: "#ffffff",
    },
    // you can add new colors here
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    button: {
      textTransform: "none",
      fontSize: "14px"
    },
  },
});


function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={jov_stem_theme}>
        <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/historia" element={<HistoryPage />} />
            <Route path="/memorias" element={<MemoryPage />} />
          </Routes>
          <Footer />
      </ThemeProvider>
    </BrowserRouter>

  );
}

export default App;
