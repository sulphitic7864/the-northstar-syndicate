import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import PublicLayout from "./layouts/PublicLayout";

import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";

import ScrollToTop from "./components/CommonComponent/ScrollToTop";

function App() {
  return (
    <>
      <div className="page-transition ">
        <Router>
          <ScrollToTop />
          <Routes>
            {/* Public Routes */}
            <Route
              path="/"
              element={
                <PublicLayout>
                  <Home />
                </PublicLayout>
              }
            />
            <Route
              path="/about-us"
              element={
                <PublicLayout>
                  <AboutUs />
                </PublicLayout>
              }
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
