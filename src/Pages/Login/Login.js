import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/UseAuth/UseAuth";
import googleIcon from "./media/google.png";

const Login = () => {
  const { signInWithGoogle, registerUser, loginUser, authError } = useAuth();
  const [isNew, setIsNew] = useState(false);
  const newSwitch = () => {
    setIsNew();
  };

  const location = useLocation();
  const history = useNavigate();

  const handleLogin = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("pass").value;
    loginUser(email, password, location, history);
  };

  const handleRegister = () => {
    const name = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("pass").value;
    registerUser(name, email, password, location, history);
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };

  return (
    <div className="lg:grid grid-cols-2 gap-2 p-10 ">
      <div className="">
        <lottie-player
          src="https://assets9.lottiefiles.com/packages/lf20_ubzysy0s.json"
          background="transparent"
          speed="1"
          style={{ width: "100%", height: "100%" }}
          loop
          autoplay
        ></lottie-player>
      </div>
      <div className="p-10">
        {isNew ? (
          <>
            <h1 className="text-xl text-gray-500">Hi There 👋</h1>
            <h1 className="text-xl text-gray-500">
              Please fill-up this to register 👇
            </h1>
            <div className="mt-2">
              <br />
              <input
                className="m-3 p-3 lg:w-96 sm:w-full rounded-lg outline-purple-500"
                type="Text"
                id="username"
                placeholder="Username"
              />
              <br />
              <input
                className="m-3 p-3 lg:w-96 sm:w-full rounded-lg outline-purple-500"
                type="Email"
                id="email"
                placeholder="Email"
              />
              <br />
              <input
                className="m-3 p-3 lg:w-96 sm:w-full rounded-lg outline-purple-500"
                type="Password"
                id="pass"
                placeholder="Password"
              />
              <br />
              {authError && (
                <>
                  <p className="text-xs text-red-500 sm:text-center lg:text-left lg:px-auto">
                    {authError}
                  </p>
                  <br />
                </>
              )}

              <div className="sm:flex lg:block justify-end sm:-mr-3 lg:ml-3 mt-2">
                <button
                  className="bg-purple-300 p-2 px-4 rounded-lg hover:bg-purple-500 hover:text-white transition ease-out duration-500"
                  onClick={handleRegister}
                >
                  Register
                </button>
              </div>
              <br />
              <p className="text-xs text-gray-500 sm:text-center lg:text-left lg:px-28">
                Already have an account?{" "}
                <button onClick={newSwitch} className="text-purple-500">
                  Login Here.
                </button>
              </p>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-xl text-gray-500">Hi There 👋</h1>
            <h1 className="text-xl text-gray-500">
              Please login to continue 👇
            </h1>
            <div>
              <input
                className="m-3 p-3 mt-5 lg:w-96 sm:w-full rounded-lg outline-purple-500"
                type="Email"
                id="email"
                placeholder="Email"
              />
              <br />
              <input
                className="m-3 p-3 lg:w-96 sm:w-full rounded-lg outline-purple-500"
                type="Password"
                id="pass"
                placeholder="Password"
              />
              <br />
              {authError && (
                <>
                  <p className="text-xs text-red-500 sm:text-center lg:text-left lg:px-auto">
                    {authError}
                  </p>
                  <br />
                </>
              )}

              <div className="flex sm:justify-end lg:justify-start sm:-mr-3 lg:ml-3 mt-2">
                <button
                  className="bg-purple-100 p-2 px-4 rounded-lg hover:bg-purple-200 hover:text-white transition ease-out duration-500 mr-3"
                  title="Google Login"
                  onClick={handleGoogleSignIn}
                >
                  <img src={googleIcon} alt="Google Icon" className="w-7" />
                </button>
                <button
                  className="bg-purple-300 p-2 px-4 rounded-lg hover:bg-purple-500 hover:text-white transition ease-out duration-500"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </div>
              <br />
              <p className="text-xs text-gray-500 sm:text-center lg:text-left lg:px-28">
                Don't have an account?{" "}
                <button onClick={setIsNew} className="text-purple-500">
                  Create a new one.
                </button>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
