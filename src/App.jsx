import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import PasswordResetConfirm from "./AuthPages/PasswordResetConfirm";
import Login from "./AuthPages/Login";
import Signup from "./AuthPages/Signup";
import ActivateAccount from "./AuthPages/ActivateAccount";
import Mirror from "./pages/Mirror";
import Learn from "./pages/Learn";
import OverlayRouteModal from "./components/OverlayRouteModal";
import Market from "./pages/Market";
import About from "./pages/About";
import Vault from "./pages/Vault";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";
import PersonalInformation from "./pages/PersonalInformation";
import ContactInformation from "./pages/ContactInformation";
import TradingCurrency from "./pages/TradingCurrency";
import Declaration from "./pages/Declaration";
import OptionsTrading from "./pages/OptionsTrading";
import AdvanceTrading from "./pages/AdvanceTrading";
import LiveTrading from "./pages/LiveTrading";

import ProtectedRoute from "./utils/ProtectedRoute";
import ForgotPassword from "./AuthPages/ForgotPassword";

function AppContent() {
    const location = useLocation();
    const state = location.state;

    return (
        <>
            {/* Main layout - normal routing */}
            <Routes location={state?.backgroundLocation || location}>
                <Route path="/" element={<Home />} />
                <Route
                    path="/market"
                    element={
                        <ProtectedRoute>
                            <Market />
                        </ProtectedRoute>
                    }
                />
                
                <Route
                    path="/vault"
                    element={
                        <ProtectedRoute>
                            <Vault />
                        </ProtectedRoute>
                    }
                />
                <Route path="/about" element={<About />} />
                <Route path="/learn" element={<Learn />} />
                <Route
                    path="/mirror/options-trading"
                    element={
                        <ProtectedRoute>
                            <OptionsTrading />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/mirror/advance-trading"
                    element={
                        <ProtectedRoute>
                            <AdvanceTrading />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/mirror/live-trading"
                    element={
                        <ProtectedRoute>
                            <LiveTrading />
                        </ProtectedRoute>
                    }
                />
                
                <Route
                    path="/deposit"
                    element={
                        <ProtectedRoute>
                            <Deposit />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/withdraw"
                    element={
                        <ProtectedRoute>
                            <Withdraw />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/kyc/personal-info"
                    element={
                        <ProtectedRoute>
                            <PersonalInformation />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/kyc/contact-info"
                    element={
                        <ProtectedRoute>
                            <ContactInformation />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/kyc/trading"
                    element={
                        <ProtectedRoute>
                            <TradingCurrency />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/kyc/declaration"
                    element={
                        <ProtectedRoute>
                            <Declaration />
                        </ProtectedRoute>
                    }
                />

                {/*  Auth routes */}
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/signup" element={<Signup />} />
                <Route
                    path="/auth/activate-account"
                    element={<ActivateAccount />}
                />
                <Route
                    path="/auth/password-reset-confirm"
                    element={<PasswordResetConfirm />}
                />
                <Route
                    path="/auth/password-reset"
                    element={<ForgotPassword />}
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
                    
                </Routes>
            )}
        </>
    );
}

const App = () => {
    return (
        <Router>
            <AppContent />
            <ToastContainer />
        </Router>
    );
};

export default App;
