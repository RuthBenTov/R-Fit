import { duration } from "@mui/material";
import axios from "axios";
// import { users } from "./../../../server/API/Users/usersModel";
import { User } from "./../../../server/API/usersAPI/usersModel";
import { Cookie } from "@mui/icons-material";

export const getThisDate = () => {
  const today: Date = new Date();

  const year: number = today.getFullYear();
  let month: string | number = today.getMonth() + 1;
  let day: string | number = today.getDate();

  if (month < 10) {
    month = `0${month}`;
  }
  if (day < 10) {
    day = `0${day}`;
  }
  const formattedDate: string = `${year}-${month}-${day}`;
  return formattedDate;
};

export const getUserFromCookie = async () => {
  try {
    const { data } = await axios("API/users/getUserByCookies");
    if (!data) throw new Error("Couldn't get user");
    return data.user;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export function calculateEndTime(startTime: string, durationMinutes: number) {
  // Parse the start time into hours and minutes
  const [startHours, startMinutes] = startTime.split(":").map(Number);

  // Create a new Date object and set the hours and minutes
  const endDate = new Date();
  endDate.setHours(startHours, startMinutes);

  // Add the duration in minutes to the start time
  endDate.setMinutes(endDate.getMinutes() + durationMinutes);

  // Format the end time as "HH:mm"
  const endHours = endDate.getHours().toString().padStart(2, "0");
  const endMinutes = endDate.getMinutes().toString().padStart(2, "0");

  return `${endHours}:${endMinutes}`;
}

export const formateEventToCalendar = (eventsDb: [any]) => {
  return eventsDb.map((event) => {
    if (event.is_regular === 0)
      return {
        id: event.training_id,
        title: event.training_name,
        start: event.date_time,
        duration: event.duration,
      };
    else
      return {
        id: event.training_id,
        title: event.training_name,
        start: event.date_time,
        startTime: event.date_time.split("T")[1],
        endTime: `${calculateEndTime(
          event.date_time.split("T")[1],
          event.duration
        )}`,
        duration: { minutes: event.duration },
        allDay: false,
        daysOfWeek: [event.day],
        recurring: true,
      };
  });
};
