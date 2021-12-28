import React from "react";

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
    </div>
  );
};

export default NotFound;
