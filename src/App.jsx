import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import AuthLayout from "./layout/AuthLayout";
import RootLayout from "./layout/RootLayout";
import PasswordResetConfirm from "./AuthPages/PasswordResetConfirm";
import Login from "./AuthPages/Login";
import Signup from "./AuthPages/Signup";
import ActivateAccount from "./AuthPages/ActivateAccount";
import Mirror from "./pages/Mirror";
import Category from "./pages/Category";
import OverlayRouteModal from "./components/OverlayRouteModal";
import Market from "./pages/Market";
import About from "./pages/About";
import Vault from "./pages/Vault";

function AppContent() {
  const location = useLocation();
  const state = location.state;

  return (
    <>
      {/* Main layout - normal routing */}
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<Market />} />
        <Route path="/vault" element={<Vault />} />
        <Route path="/about" element={<About />} />
        <Route path="/mirror" element={<Mirror />} />
        <Route path="/category" element={<Category />} />

        {/*  Auth routes */}
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/auth/activate-account" element={<ActivateAccount />} />
        <Route
          path="/auth/password-reset-confirm"
          element={<PasswordResetConfirm />}
        />
      </Routes>

      {/* Overlay routes */}
      {state?.backgroundLocation && (
        <Routes>
          <Route
            path="/mirror"
            element={
              <OverlayRouteModal>
                <Mirror />
              </OverlayRouteModal>
            }
          />
          <Route
            path="/category"
            element={
              <OverlayRouteModal>
                <Category />
              </OverlayRouteModal>
            }
          />
        </Routes>
      )}
    </>
  );
}

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
