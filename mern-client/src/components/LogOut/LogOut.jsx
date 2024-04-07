import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const LogOut = () => {
  const { logOut } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const form1 = location.state?.form?.pathname || "/";
  const hanldelogOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
        alert("LogOut Succefully!!");
        navigate(form, { replace: true });
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="h-screen bg-teal-100 flex item-center justify-center">
      <button
        className="bg-red-700 px-4 py-2 text-white rounded "
        onClick={hanldelogOut}
      >
        LogOut
      </button>
    </div>
  );
};

export default LogOut;
