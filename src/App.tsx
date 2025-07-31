import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './assets/styles/App.css';
import './assets/styles/Utils/utils.css';


import ScrollToTop from "./components/Utils/ScrollToTop.tsx";
import WelcomePage from "./components/Auth/WelcomePage.tsx";
import RegisterPage from "./components/Auth/RegisterPage.tsx";
import ConfirmMail from "./components/Auth/Register/ConfirmMail.tsx";
import PersonalizationPage from "./components/Auth/Register/PersonalizeExperience.tsx";
import PersonalizationDyslexie from "./components/Auth/Register/Personalize/Personalize-Dyslexie.tsx";
import PersonalizationDaltonisme from "./components/Auth/Register/Personalize/Personalize-Daltonisme.tsx";
import PersonalizationVisionReduite from "./components/Auth/Register/Personalize/Personalize-Vision-Reduite.tsx";
import PersonalizationGestesImprecis from "./components/Auth/Register/Personalize/Personalize-Geste-Imprecis.tsx";
import RegisterFinish from "./components/Auth/Register/RegisterFinish.tsx";
import ResearchActivitiesPage from "./components/Auth/Register/ResearchActivities.tsx";
import RegisterGeoPage from "./components/Auth/Register/RegisterArea.tsx";


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
              { /* Authentification */}
              <Route path="/welcome" element={<WelcomePage />} />
              <Route path="/register" element={<RegisterPage />} />
              { /* Système d'inscription */}
              <Route path="/confirm-mail" element={<ConfirmMail />} />
              <Route path="/personalize" element={<PersonalizationPage />} />
              <Route path="/personalize-dyslexie" element={<PersonalizationDyslexie />} />
              <Route path="/personalize-daltonisme" element={<PersonalizationDaltonisme />} />
              <Route path="/personalize-gestes-imprecis" element={<PersonalizationGestesImprecis />} />
              <Route path="/personalize-vision-reduite" element={<PersonalizationVisionReduite />} />
              <Route path="/register-activities" element={<ResearchActivitiesPage />} />
              <Route path="/choose-area" element={<RegisterGeoPage />} />
              <Route path="/register-finish" element={<RegisterFinish />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
}

export default App;
