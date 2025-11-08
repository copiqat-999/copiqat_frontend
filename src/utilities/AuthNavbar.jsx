import React, { useEffect, useState } from "react";
import Navbar from "./Navbar"; // not logged in
import RootNavbar from "./RootNavbar";// logged in

const AuthNavbar = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const access = localStorage.getItem("access_token");
        const refresh = localStorage.getItem("refresh_token");

        // check if both tokens exist and are not empty
        if (access && refresh) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, []); // runs once on mount

    return isAuthenticated ? <RootNavbar /> : <Navbar />;
};

export default AuthNavbar;
