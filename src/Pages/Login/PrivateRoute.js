import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/UseAuth/UseAuth";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuth();

  let location = useLocation();
  if (isLoading) {
    return (
      <div className=" bg-white/30 h-screen flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-circles animate-spin"
          width="100"
          height="100"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#a905b6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="7" r="4" />
          <circle cx="6.5" cy="17" r="4" />
          <circle cx="17.5" cy="17" r="4" />
        </svg>
      </div>
    );
  }
  if (user.email) {
    return children;
  }
  return user?.email ? (
    children
  ) : (
    <Navigate to="/" state={{ from: location }} />
  );
};

export default PrivateRoute;
