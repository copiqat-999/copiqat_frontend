import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ children }) => {
    const { auth, loading } = useAuth();
    const location = useLocation();

    if (loading) return null;

    if (!auth.isAuthenticated) {
        // Redirect to login but remember where the user came from
        return <Navigate to="/auth/login" state={{ from: location }} replace />;
    }

    return children;
};

export default ProtectedRoute;
