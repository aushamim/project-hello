import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/UseAuth/UseAuth";
import defaultAvatar from "./media/venti.png";

const Nav = () => {
  const { user } = useAuth();
  const [singleUserID, setSingleUserID] = useState([]);
  useEffect(() => {
    fetch(`https://aqueous-springs-11487.herokuapp.com/users`)
      .then((res) => res.json())
      .then((data) => data.filter((x) => x.email === user.email))
      .then((newData) => setSingleUserID(newData[0]._id));
  }, [user.email]);
  return (
    <div className="pt-7 pl-7 relative lg:w-fit sm:mr-3 lg:mr-0">
      <div className="shadow-sm bg-white rounded-lg">
        <Link to={`/user/${singleUserID}`}>
          <div
            style={{ width: "80px", position: "absolute", left: 0, top: 0 }}
            className="rounded-full outline lg:outline-4 outline-purple-50 bg-white sm:outline-8 sm:ml-3 lg:ml-0"
          >
            <img
              src={user.photoURL ? user.photoURL : defaultAvatar}
              alt="Avatar"
              className="rounded-full"
              title={user.displayName}
            />
          </div>
        </Link>
        <div>
          <Link to={`/user/${singleUserID}`}>
            <div className="grid grid-cols-3 mb-5 sm:mt-10 lg:mt-0">
              <span className="sm:hidden md:hidden lg:block">
                &#10240; &#10240; &#10240; &#10240;
              </span>
              <span className="col-span-2 col-start-2 text-center font-bold p-2 sm:hidden lg:block">
                {user.displayName}
              </span>
            </div>
          </Link>
          <div className="p-3">
            <a href="/home">
              <button className="flex font-medium mb-5 rounded-lg ring-purple-400 lg:w-full hover:ring-2 transition ease-out duration-500">
                {/* Home Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-home"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="#a905b6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="5 12 3 12 12 3 21 12 19 12" />
                  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                  <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                </svg>
                <span className="sm:hidden md:hidden lg:block ml-3">Home</span>
              </button>
            </a>

            <Link
              to={`/user/${singleUserID}`}
              className="flex font-medium my-5 rounded-lg ring-purple-400 lg:w-full hover:ring-2 transition ease-out duration-500"
            >
              {/* Profile Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-user"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#a905b6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="12" cy="7" r="4" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              </svg>
              <span className="sm:hidden lg:block ml-3">Profile</span>
            </Link>

            <Link
              to="/friends"
              className="flex font-medium my-5 rounded-lg ring-purple-400 lg:w-full hover:ring-2 transition ease-out duration-500"
            >
              {/* Friends Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-friends"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#a905b6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="7" cy="5" r="2" />
                <path d="M5 22v-5l-1 -1v-4a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4l-1 1v5" />
                <circle cx="17" cy="5" r="2" />
                <path d="M15 22v-4h-2l2 -6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1l2 6h-2v4" />
              </svg>
              <span className="sm:hidden lg:block ml-3">Friends</span>
            </Link>

            <Link
              to="/chats"
              className="flex font-medium my-5 rounded-lg ring-purple-400 lg:w-full hover:ring-2 transition ease-out duration-500"
            >
              {/* Chat Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-messages"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#a905b6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
              </svg>
              <span className="sm:hidden lg:block ml-3">Chat</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
