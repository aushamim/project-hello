import React, { useEffect, useState } from "react";
import defaultAvatar from "../Navigation/media/venti.png";

const Contacts = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://aqueous-springs-11487.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

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
};

export default Contacts;
