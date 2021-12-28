import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import defaultAvatar from "../Navigation/media/venti.png";

const Posts = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://aqueous-springs-11487.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://aqueous-springs-11487.herokuapp.com/posts")
      .then((res) => res.json())
      .then((data) => data.sort((a, b) => b.time - a.time))
      .then((sortedData) => setPosts(sortedData));
  }, []);

  const handleUsername = (UID) => {
    const user = users.filter((user) => user._id === UID);
    return user[0]?.displayName;
  };
  const handleAvatar = (UID) => {
    const user = users.filter((user) => user._id === UID);
    return user[0]?.photoURL;
  };
  const handleDate = (time) => {
    const date = new Date(time);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${
      hours > 12 ? hours - 12 : hours
    }:${minutes}${ampm} ${day}/${month}/${year}`;
  };

  return (
    <div className="mt-3">
      {/* Repeat Start */}
      {posts.map((post) => (
        <div key={post._id} className="mt-3">
          <div className=" pl-7 relative">
            <div className="shadow-sm bg-white rounded-tr-lg p-2">
              <div
                style={{ width: "60px", position: "absolute", left: 0, top: 2 }}
                className="rounded-full outline outline-4 outline-purple-50 bg-white"
              >
                <img
                  className="rounded-full"
                  src={
                    handleAvatar(post.UID) === "defaultAvatar"
                      ? defaultAvatar
                      : handleAvatar(post.UID)
                  }
                  alt="Avatar"
                />
              </div>
              <div className="pl-12">
                <Link to={`/user/${post.UID}`} className="text-xl font-medium">
                  {handleUsername(post.UID)}
                </Link>
                <br />
                <div className="flex mt-1">
                  {/* Clock Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-clock mr-1"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="#9e9e9e"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="12" cy="12" r="9" />
                    <polyline points="12 7 12 12 15 15" />
                  </svg>
                  <span className="text-xs text-gray-400">
                    {handleDate(post.time)}
                  </span>
                </div>
              </div>
            </div>
            <div className="shadow-sm bg-white rounded-b-lg p-3 mt-2 break-words">
              <p>{post.post}</p>
            </div>
            <div className=" flex justify-end">
              <div className="shadow-sm bg-white rounded-lg p-3 mt-2 flex">
                {/* {handleRandom()} */}
                <button
                  className="flex items-center justify-center"
                  onClick={() => {
                    document.getElementById(`heart-${post.time}`).style.fill =
                      "#ff2825";
                  }}
                >
                  {/* Heart Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-heart"
                    id={`heart-${post.time}`}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="#ff2825"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                  </svg>
                  <span className="text-red-600 ml-2">{/*5*/}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* Repeat End */}
    </div>
  );
};

export default Posts;
