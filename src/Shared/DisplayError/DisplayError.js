import React, { useContext } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const DisplayError = () => {
  const { logOut } = useContext(AuthContext);
  const error = useRouteError();
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="alert alert-error shadow-lg mt-5">
        <div>
          <p className="text-3xl">Something went wrong</p>
          <p className="text-red-400">{error.statusText || error.message}</p>
          <h4 className="text-3xl">
            <button className="btn btn-sm btn-primary" onClick={handleLogOut}>
              Sign out
            </button>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default DisplayError;
