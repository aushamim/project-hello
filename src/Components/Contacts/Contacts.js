import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import defaultAvatar from "../Navigation/media/venti.png";

const Contacts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://aqueous-springs-11487.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return (
      <div className=" bg-white/30 p-10 flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-circle-dashed animate-spin"
          width="100"
          height="100"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#a905b6"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M8.56 3.69a9 9 0 0 0 -2.92 1.95" />
          <path d="M3.69 8.56a9 9 0 0 0 -.69 3.44" />
          <path d="M3.69 15.44a9 9 0 0 0 1.95 2.92" />
          <path d="M8.56 20.31a9 9 0 0 0 3.44 .69" />
          <path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95" />
          <path d="M20.31 15.44a9 9 0 0 0 .69 -3.44" />
          <path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92" />
          <path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69" />
        </svg>
      </div>
    );
  } else {
    return (
      <div className="shadow-sm bg-white rounded-lg p-3 pr-0 overflow-hidden">
        <span className="text-gray-400 text-xs font-medium pl-3">
          Recent Users
        </span>
        <div className="max-h-96  overflow-scroll">
          {/* Repeat Start */}
          {users.map((user) => (
            <div
              key={user._id}
              className="shadow-sm bg-white rounded-tr-lg p-2 flex items-center lg:justify-start sm:justify-center"
            >
              <Link to={`/user/${user._id}`}>
                <div className="rounded-full outline outline-4 outline-purple-50 bg-white w-16">
                  <img
                    className="rounded-full"
                    src={
                      user.photoURL === "defaultAvatar"
                        ? defaultAvatar
                        : user.photoURL
                    }
                    alt="Avatar"
                  />
                </div>
              </Link>
              <div className="pl-10">
                <span className="text-l font-medium lg:block sm:hidden">
                  {user.displayName}
                </span>
              </div>
            </div>
          ))}
          {/* Repeat End */}
        </div>
      </div>
    );
  }
};

export default Contacts;
