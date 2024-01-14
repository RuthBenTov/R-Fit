import React from "react";
import { FaPen } from "react-icons/fa6";
import { FaFlagCheckered } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import "./profilePage.scss";

const ProfilePage = () => {
  return (
    <div className="profilePageDiv">
      <div className="userInfoDiv">
        <div className="userImg">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
            alt=""
          />

          <div className="userInfo">
            <h3>Ruth Ben Tov</h3>
            <div className="userEmail userInfoItem">
              <p>Email: rut50@gmail.com</p>
              <FaPen />
            </div>
            <div className="userBirthDay userInfoItem">
              <p>Birth Day: 12-12-2012</p>
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
