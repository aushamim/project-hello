import { useEffect, useState } from "react";
import useAuth from "../../Hooks/UseAuth/UseAuth";

const NewPostBox = () => {
  const { user } = useAuth();
  const [singleUserID, setSingleUserID] = useState([]);
  useEffect(() => {
    fetch(`https://aqueous-springs-11487.herokuapp.com/users`)
      .then((res) => res.json())
      .then((data) => data.filter((x) => x.email === user.email))
      .then((newData) => setSingleUserID(newData[0]._id));
  }, [user.email]);

  const { postType, view, handleViewType } = useAuth();
  const handlePost = () => {
    const postData = document.getElementById("postData").value;
    const UID = { UID: singleUserID };
    const finalPost = { post: postData };
    const time = new Date().getTime();
    const finalData = { ...UID, time, ...finalPost };

    fetch("https://aqueous-springs-11487.herokuapp.com/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(finalData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.insertedId) {
          document.location.reload();
          document.getElementById("postData").value = "";
        }
      });
  };

  return (
    <div
      className="shadow-sm bg-white rounded-lg p-3 mt-3"
      style={{ display: view ? "block" : "none" }}
    >
      <div style={{ display: postType === "text" ? "block" : "none" }}>
        <textarea
          type="text"
          className="outline outline-2 outline-purple-100 rounded-lg p-1 px-3 w-full focus:bg-purple-50 focus:outline-purple-500 text-sm"
          placeholder="Write Here"
          rows="5"
          id="postData"
        />
        <div className="flex justify-end">
          <button
            className="bg-red-50 p-2 rounded-lg hover:bg-red-100  transition ease-out duration-500 mr-2"
            title="Close"
            onClick={() => {
              handleViewType(false);
            }}
          >
            {/* Cross Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-x"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#fd0061"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <button
            className="bg-red-50 p-2 rounded-lg hover:bg-red-100  transition ease-out duration-500 mr-2"
            title="Clear"
            onClick={() => {
              document.getElementById("postData").value = "";
            }}
          >
            {/* Trash Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-trash-x"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#fd0061"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 7h16" />
              <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
              <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
              <path d="M10 12l4 4m0 -4l-4 4" />
            </svg>
          </button>
          <button
            className="bg-purple-100 p-2 px-4 rounded-lg text-gray-500 hover:bg-purple-200 hover:text-black transition ease-out duration-500"
            onClick={handlePost}
          >
            Post
          </button>
        </div>
      </div>
      <div
        className="text-xl text-center p-5"
        style={{ display: postType === "others" ? "block" : "none" }}
      >
        Coming Soon...
        <button
          className="bg-red-50 p-2 rounded-lg hover:bg-red-100  transition ease-out duration-500 ml-2"
          title="Close"
          onClick={() => {
            handleViewType(false);
          }}
        >
          {/* Cross Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-x"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#fd0061"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NewPostBox;
