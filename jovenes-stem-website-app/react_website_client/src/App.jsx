import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContentApiPlaceholder } from "./pages/ContentApiPlaceholder";
import { HomePage } from "./pages/HomePage";
import { PhilosophyPage } from "./pages/PhilosophyPage";
import { HistoryPage } from "./pages/HistoryPage";
import { MemoryPage } from "./pages/MemoryPage";
import { Navigation } from "./components/Navigation";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Footer } from "./components/Footer";



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
          <Route path="/home" element={<HomePage />} />
            <Route path="/content" element={<ContentApiPlaceholder />} />
            <Route path="/filosofia" element={<PhilosophyPage />} />
            <Route path="/historia" element={<HistoryPage />} />
            <Route path="/memorias" element={<MemoryPage />} />
          </Routes>
      </ThemeProvider>
    </BrowserRouter>

  );
}

export default App;
