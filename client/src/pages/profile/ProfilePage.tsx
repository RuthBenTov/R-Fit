import { useEffect, useState } from "react";
import { FaPen } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";
import Popup from "./Popup";
import "./scss/profilePage.scss";
import { getUserFromCookie } from "../../API/usersApi";



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
            src="https://images.pexels.com/photos/5128256/pexels-photo-5128256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
              <p>Birthday: {user && user.date_of_birth ? user.date_of_birth.substring(0, 10) : ''}</p>
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
