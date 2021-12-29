import React from "react";
import Contacts from "../../Components/Contacts/Contacts";
import Header from "../../Components/Navigation/Header";
import Nav from "../../Components/Navigation/Nav";
import Nav2 from "../../Components/Navigation/Nav2";
import Notifications from "../../Components/Notifications/Notifications";
import ComingSoon from "../ComingSoon/ComingSoon";

const Chats = () => {
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
          <ComingSoon></ComingSoon>
        </div>
        <div className="p-2 mt-5 h-fit sticky top-3" id="notifications">
          <Notifications></Notifications>
          <br />
          <Contacts></Contacts>
        </div>
      </div>
    </>
  );
};

export default Chats;
