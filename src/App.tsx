import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './assets/styles/index.css';


import ScrollToTop from "./components/Utils/ScrollToTop.tsx";
import "./assets/styles/App.css";


// Lazy load des composants de page
const Home = lazy(() => import("./components/Home/Home.tsx"));




function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <main className="main-content">
          <Suspense>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
}

export default App;
