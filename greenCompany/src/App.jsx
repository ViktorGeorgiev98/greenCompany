import "./App.css";
import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./UI/AppLayout";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import { LanguageContextProvider } from "./Context/LanguageContext";
import { ModalContextProvider } from "./Context/ModalContext";
function App() {
  return (
    <>
      <ModalContextProvider>
        <LanguageContextProvider>
          <GlobalStyles />
          <BrowserRouter>
            <Routes>
              <Route element={<AppLayout />}>
                <Route index element={<Navigate replace to="home" />} />
                <Route path="home" element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </LanguageContextProvider>
      </ModalContextProvider>
    </>
  );
}

export default App;
