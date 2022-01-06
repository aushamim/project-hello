import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Contacts from "../../Components/Contacts/Contacts";
import Header from "../../Components/Navigation/Header";
import Nav from "../../Components/Navigation/Nav";
import Nav2 from "../../Components/Navigation/Nav2";
import Notifications from "../../Components/Notifications/Notifications";
import cover from "./media/default-cover.png";
import defaultAvatar from "../../Components/Navigation/media/venti.png";
import useAuth from "../../Hooks/UseAuth/UseAuth";

const UserProfile = () => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  let UID = useParams();
  const [userDetails, setUserDetails] = useState([]);
  useEffect(() => {
    fetch(`https://aqueous-springs-11487.herokuapp.com/users`)
      .then((res) => res.json())
      .then((data) => data.filter((x) => x._id === UID.id))
      .then((newData) => setUserDetails(newData[0]));
  }, [UID]);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://aqueous-springs-11487.herokuapp.com/posts")
      .then((res) => res.json())
      .then((data) => data.filter((x) => x.UID === UID.id))
      .then((filteredData) => filteredData.sort((a, b) => b.time - a.time))
      .then((sortedData) => setPosts(sortedData))
      .finally(() => setIsLoading(false));
  }, [UID.id]);

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

  // delete
  const handleDelete = (id) => {
    const url = `https://aqueous-springs-11487.herokuapp.com/posts/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const confirm = window.confirm("Do you Want to Delete?");
        if (confirm) {
          if (data.deletedCount > 0) {
            // alert("order Deleted");
            document.location.reload();
          }
        }
      });
  };

  return (
    <>
      <Header></Header>
      <div className="p-5 lg:grid md:grid sm:block grid-cols-4 gap-3">
        <div className="md:flex justify-end sticky top-3 h-fit z-50">
          <div className="lg:block md:block hidden">
            <Nav></Nav>
          </div>
          <div className="lg:hidden md:hidden">
            <Nav2></Nav2>
          </div>
        </div>
        <div className="p-2 mt-5 col-span-2 h-fit">
          <div>
            <div className="relative">
              <div
                className="w-full lg:h-48 md:h-28 h-24 bg-cover rounded-t-lg"
                style={{
                  background: `url(${cover}) center/100%`,
                }}
              ></div>
              <div className="absolute rounded-full outline lg:outline-4 outline-purple-50 bg-white sm:outline-8 sm:ml-3 lg:ml-0 h-16 w-16 sm:w-20 sm:h-20 md:top-16 md:left-3 lg:w-36 lg:h-36 lg:top-28 lg:left-10 top-16 right-5">
                <img
                  src={
                    userDetails.photoURL === "defaultAvatar"
                      ? defaultAvatar
                      : userDetails.photoURL
                  }
                  alt="Avatar"
                  className="rounded-full lg:h-36 lg:w-36"
                />
              </div>
              {user.email === userDetails.email ? (
                ""
              ) : (
                <button
                  className="absolute sm:top-32 lg:top-52 sm:right-4 lg:right-6 right-3 rounded-full bg-purple-200 bg-opacity-70 md:bg-opacity-100 md:bg-transparent hover:bg-purple-200 p-2 transition ease-in-out duration-500"
                  title="Add Friend"
                >
                  {/* Add Friend Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-user-plus"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#000000"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    <path d="M16 11h6m-3 -3v6" />
                  </svg>
                </button>
              )}
            </div>
            <div className="bg-white shadow-sm lg:p-12 sm:p-5 rounded-b-lg">
              <h1 className="lg:text-4xl sm:text-2xl font-medium lg:mt-10 md:mt-8 sm:mt-5 m-3 md:m-0">
                {userDetails.displayName}
              </h1>
              <p className="text-gray-500 flex text-sm items-center mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-message-2 mr-1"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#9e9e9e"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 20l-3 -3h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-2l-3 3" />
                  <line x1="8" y1="9" x2="16" y2="9" />
                  <line x1="8" y1="13" x2="14" y2="13" />
                </svg>
                Hi There 👋
              </p>
              <div className="grid grid-cols-4 gap-2 sm:mt-5 lg:mt-10 p-3 lg:p-0">
                <div>
                  <h1 className="text-xl font-bold text-center">5</h1>
                  <p className="text-sm text-gray-500 text-center">Posts</p>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-center">10</h1>
                  <p className="text-sm text-gray-500 text-center">Following</p>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-center">27</h1>
                  <p className="text-sm text-gray-500 text-center">Followers</p>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-center">106</h1>
                  <p className="text-sm text-gray-500 text-center">Likes</p>
                </div>
              </div>
            </div>

            {isLoading ? (
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
            ) : (
              <div>
                {/* Repeat Start */}
                {posts.map((post) => (
                  <div key={post._id} className="mt-3">
                    <div className=" pl-7 relative">
                      <div className="shadow-sm bg-white rounded-tr-lg p-2">
                        <div
                          style={{
                            width: "60px",
                            position: "absolute",
                            left: 0,
                            top: 2,
                          }}
                          className="rounded-full outline outline-4 outline-purple-50 bg-white"
                        >
                          <img
                            className="rounded-full"
                            src={
                              userDetails.photoURL === "defaultAvatar"
                                ? defaultAvatar
                                : userDetails.photoURL
                            }
                            alt="Avatar"
                          />
                        </div>
                        <div className="pl-12">
                          <div className="grid grid-cols-3">
                            <div className="col-span-2">
                              <h1 className="text-xl font-medium">
                                {userDetails.displayName}
                              </h1>
                            </div>
                            {user.email === userDetails.email ? (
                              <div className="flex justify-end">
                                {/* Trash Icon */}
                                <button
                                  className="hover:bg-red-100 p-1 rounded-full transition ease-in-out duration-500"
                                  onClick={() => {
                                    handleDelete(post._id);
                                  }}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-trash "
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="#ff2825"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path
                                      stroke="none"
                                      d="M0 0h24v24H0z"
                                      fill="none"
                                    />
                                    <line x1="4" y1="7" x2="20" y2="7" />
                                    <line x1="10" y1="11" x2="10" y2="17" />
                                    <line x1="14" y1="11" x2="14" y2="17" />
                                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                  </svg>
                                </button>
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                          <div className="flex mt-2">
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
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
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
                    </div>
                  </div>
                ))}
                {/* Repeat End */}
              </div>
            )}
          </div>
        </div>
        <div className="p-2 mt-5 h-fit" id="notifications">
          <Notifications></Notifications>
          <br />
          <Contacts></Contacts>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
