import React, { useEffect, useState } from "react";
import { FaPen } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";

import { FaFlagCheckered } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import "./profilePage.scss";
import { getUserFromCookie } from "../../assets/functions";
import Popup from "./Popup";

const ProfilePage = () => {
  const [user, setUser] = useState<{
    user_id: number;
    name: string;
    email: string;
    phone_number: string;
    date_of_birth: string;
  } | null>(null);

  const [editor, setEditor] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userFromCookie = await getUserFromCookie();
        setUser(userFromCookie);
      } catch (error) {
        console.error("Error fetching user from cookie:", error);
      }
    };

    fetchData();
  }, []);

  const popup = () => {
    setEditor(!editor);
  };
  return (
    <div className="profilePageDiv">
      <div className="userInfoDiv">
        <div className="userImg">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
          {editor ? (
            <IoMdCloseCircle className="closeBtn" onClick={popup} />
          ) : null}

          <div className="userInfo">
            <h3>{user?.name}</h3>
            <div className="userEmail userInfoItem">
              <p>Email: {user?.email}</p>
              <FaPen
                className="penIcon"
                onClick={() => {
                  popup();
                }}
              />
            </div>
            <div className="userBirthDay userInfoItem">
              <p>Birthday: {user?.date_of_birth.substring(0, 10)}</p>
              <FaPen
                className="penIcon"
                onClick={() => {
                  popup();
                }}
              />
            </div>
            <div className="userPhone userInfoItem">
              <p>Phone: {user?.phone_number}</p>
              <FaPen
                className="penIcon"
                onClick={() => {
                  popup();
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {editor ? <Popup user={user} /> : <></>}
    </div>
  );
};

export default ProfilePage;
