import React, { useEffect, useState } from "react";
import { FaPen } from "react-icons/fa6";
import { FaFlagCheckered } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import "./profilePage.scss";
import { getUserFromCookie } from "../../assets/functions";


console.log("say hallo baby!")
const ProfilePage = () => {
  const [user, setUser] = useState<{
    name: string;
    email: string;
    phone_number: string;
    date_of_birth: string;
  } | null>(null);

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

  return (
    <div className="profilePageDiv">
      <div className="userInfoDiv">
        <div className="userImg">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
            alt=""
          />

          <div className="userInfo">
            <h3>{user?.name}</h3>
            <div className="userEmail userInfoItem">
              <p>Email: {user?.email}</p>
              <FaPen />
            </div>
            <div className="userBirthDay userInfoItem">
              <p>Birthday: {user?.date_of_birth.substring(0, 10)}</p>
              <FaPen />
            </div>
            <div className="userPhone userInfoItem">
              <p>Phone: {user?.phone_number}</p>
              <FaPen />
            </div>
          </div>
        </div>
      </div>

      <div className="userHistory">
        {/* <h3>your training:</h3> */}
        <div className="nextTrainings">
          <h3>Next Trainings</h3>
          <div className="training">
            <h4>Wod</h4>
            <div className="trainingInfo">
              <div>
                <h5>Trainer: Kloei Rok</h5>
                <h5>Training Duration : 45 min</h5>
              </div>
              <FaClock />
            </div>
          </div>

          <div className="training">
            <h4>Wod</h4>
            <div className="trainingInfo">
              <div>
                <h5>Trainer: Kloei Rok</h5>
                <h5>Training Duration : 45 min</h5>
              </div>
              <FaClock />
            </div>
          </div>
        </div>
        <div className="lastTrainings">
          <h3>Last Trainings</h3>
          <div className="training">
            <h4>Wod</h4>
            <div className="trainingInfo">
              <div>
                <h5>Trainer: Kloei Rok</h5>
                <h5>Training Duration : 45 min</h5>
              </div>
              <FaFlagCheckered />
            </div>
          </div>
          <div className="training">
            <h4>Wod</h4>
            <div className="trainingInfo">
              <div>
                <h5>Trainer: Kloei Rok</h5>
                <h5>Training Duration : 45 min</h5>
              </div>
              <FaFlagCheckered />
            </div>
          </div>
          <div className="training">
            <h4>Crossfit</h4>
            <div className="trainingInfo">
              <div>
                <h5>Trainer: Kloei Rok</h5>
                <h5>Training Duration : 45 min</h5>
              </div>
              <FaFlagCheckered />
            </div>
          </div>
          <div className="training">
            <h4>Yoga</h4>
            <div className="trainingInfo">
              <div>
                <h5>Trainer: Kloei Rok</h5>
                <h5>Training Duration : 45 min</h5>
              </div>
              <FaFlagCheckered />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
