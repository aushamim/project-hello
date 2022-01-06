import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div className="flex justify-center h-screen">
        <lottie-player
          src="https://assets5.lottiefiles.com/private_files/lf30_tonsVH.json"
          background="transparent"
          speed="1"
          style={{ width: "80%", height: "80%" }}
          loop
          autoplay
        ></lottie-player>
      </div>
      <h1 className="text-5xl font-semibold text-gray-500 text-center -mt-60">
        Page Not Found!
      </h1>
      <Link to="/home">
        <h2 className="text-3xl font-semibold text-purple-500 text-center mt-5">
          Go to Home
        </h2>
      </Link>
    </div>
  );
};

export default NotFound;
