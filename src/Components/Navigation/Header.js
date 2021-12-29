import React from "react";
import useAuth from "../../Hooks/UseAuth/UseAuth";

const Header = () => {
  const { logout } = useAuth();
  return (
    <nav className="shadow-sm bg-white flex p-2 justify-around items-center">
      <div>
        <a href="/home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-3d-cube-sphere"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#2c3e50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 17.6l-2 -1.1v-2.5" />
            <path d="M4 10v-2.5l2 -1.1" />
            <path d="M10 4.1l2 -1.1l2 1.1" />
            <path d="M18 6.4l2 1.1v2.5" />
            <path d="M20 14v2.5l-2 1.12" />
            <path d="M14 19.9l-2 1.1l-2 -1.1" />
            <line x1="12" y1="12" x2="14" y2="10.9" />
            <line x1="18" y1="8.6" x2="20" y2="7.5" />
            <line x1="12" y1="12" x2="12" y2="14.5" />
            <line x1="12" y1="18.5" x2="12" y2="21" />
            <path d="M12 12l-2 -1.12" />
            <line x1="6" y1="8.6" x2="4" y2="7.5" />
          </svg>
        </a>
      </div>

      <div className="flex">
        <div className="flex items-center">
          <input
            type="text"
            className="outline outline-2 outline-purple-100 rounded-full p-1 px-3 bg-purple-50 focus:bg-purple-200 focus:outline-purple-500 mx-2 text-gray-500 lg:block md:block hidden"
            placeholder="Search posts or users"
          />
          {/* Search Icon */}
          <button
            className="transition ease-in-out duration-500 mx-2 p-1 rounded-full bg-purple-100 hover:bg-purple-300"
            title="Search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-search"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#2c3e50"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="10" cy="10" r="7" />
              <line x1="21" y1="21" x2="15" y2="15" />
            </svg>
          </button>
        </div>
        <div className="flex items-center">
          {/* Pen Icon */}
          <button
            className="transition ease-in-out duration-500 mx-2 p-1 rounded-full bg-purple-100 hover:bg-purple-300 hidden"
            title="New Post"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-pencil"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#2c3e50"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
              <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
            </svg>
          </button>

          {/* Bell Icon */}
          <a href="#notifications">
            <button
              className="transition ease-in-out duration-500 p-1 mx-2 rounded-full bg-purple-100 hover:bg-purple-300"
              title="Notifications"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-bell"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
              </svg>
            </button>
          </a>

          {/* Logout Icon */}

          <button
            onClick={logout}
            className="transition ease-in-out duration-500 p-1 mx-2 rounded-full bg-purple-100 hover:bg-purple-300"
            title="Logout"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-logout"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#2c3e50"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
              <path d="M7 12h14l-3 -3m0 6l3 -3" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
