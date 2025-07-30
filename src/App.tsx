import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './assets/styles/App.css';
import './assets/styles/Utils/utils.css';


import ScrollToTop from "./components/Utils/ScrollToTop.tsx";
import WelcomePage from "./components/Auth/WelcomePage.tsx";
import RegisterPage from "./components/Auth/RegisterPage.tsx";


// Lazy load des composants de page
const LandingPage = lazy(() => import("./components/Landing/LandingPage.tsx"));




function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <main className="main-content">
          <Suspense>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/welcome" element={<WelcomePage />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
}

export default App;
