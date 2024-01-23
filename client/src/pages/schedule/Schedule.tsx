import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect, useState } from "react";
import {
  CalendarEvent,
  actionSelector,
} from "../../features/actions/eventSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchEvents } from "../../API/eventCtrl";
import { CgProfile } from "react-icons/cg";
import { TbCalendarCog } from "react-icons/tb";
import Fullcalendar from "../../components/fullcalendar/Fullcalendar";
import "./scss/schedule.scss";
import { useNavigate } from "react-router-dom";
import { getUserFromCookie } from "../../assets/functions";

const Schedule = () => {
  const dispatch = useAppDispatch();
  const events = useAppSelector(actionSelector);
  const [isAdmin, setIsAdmin] = useState(false);
  
  useEffect(() => {
    const getUserRole = async () => {
      const user = await getUserFromCookie();
      if (user.role === "admin") setIsAdmin(true);
    };
    getUserRole();
  }, []);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  const navigate = useNavigate();

  return (
    <div className="schedule-container">
      <CgProfile className="profileIcon" onClick={() => {navigate("/profile")}}/>
      {isAdmin?<TbCalendarCog className="managerCalendarIcon"  onClick={() => navigate("/manager-calender")}/>:null}
      <div style={{width: "90%",textAlign: "center",margin: "auto",paddingTop: "2%"}}>
        <Fullcalendar calendarEvents={events as CalendarEvent[]} />
      </div>
    </div>
  );
};

export default Schedule;
