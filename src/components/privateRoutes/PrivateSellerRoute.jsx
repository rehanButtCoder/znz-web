import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
function PrivateSellerRoute({ children }) {
    const userRole = useSelector((state) => state.user.userData?.user?.role?.role);

    //UseState
    const [isExpiredTime, setIsExpiredTime] = useState(true);
    //UseEffect
    useEffect(() => {
        checkExpiryTime();
    }, []);
    //Functions
    const checkExpiryTime = () => {
        // debugger
        if (userRole === "seller") {
            setIsExpiredTime(true);
        } else {
            setIsExpiredTime(false);
        }
    };
    return isExpiredTime ? children : <Navigate to="/login" />;
}

export default PrivateSellerRoute;