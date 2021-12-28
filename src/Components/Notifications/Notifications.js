import React from "react";
import "./Notifications.css";

const Notifications = () => {
  return (
    <div className="shadow-sm bg-white rounded-lg p-3 pr-0 max-h-96 overflow-hidden">
      <span className="text-gray-400 text-xs font-medium pl-3">
        Notifications
      </span>
      <div className="max-h-96 pb-10 overflow-scroll">
        {/* Repeat Start */}
        <p className="mt-2 p-3 bg-purple-50 react">
          <span className="font-medium">Zëro</span> reacted to your post.
        </p>
        <p className="mt-2 p-3 bg-purple-50 request">
          <span className="font-medium">Hafuku</span> sent you a friend request.
        </p>
        <p className="mt-2 p-3 bg-purple-50 react">
          <span className="font-medium">shiki🥳</span> reacted to your post.
        </p>
        <p className="mt-2 p-3 bg-purple-50 react">
          <span className="font-medium">Tokoshima</span> reacted to your post.
        </p>
        <p className="mt-2 p-3 bg-purple-50 react">
          <span className="font-medium">Sarene</span> reacted to your post.
        </p>
        <p className="mt-2 p-3 bg-purple-50 request">
          <span className="font-medium">ActuallyAIS</span> sent you a friend
          request.
        </p>
        <p className="mt-2 p-3 bg-purple-50 request">
          <span className="font-medium">Merkatsu</span> sent you a friend
          request.
        </p>
        <p className="mt-2 p-3 bg-purple-50 react">
          <span className="font-medium">L.lawliet</span> reacted to your post.
        </p>
        {/* Repeat End */}
      </div>
    </div>
  );
};

export default Notifications;
