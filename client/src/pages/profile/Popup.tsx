import { FC } from "react";

import "./scss/popup.scss";
import { updateUser } from "../../API/userApi";
interface PopupProps {
  user: {
    user_id: number;
    name: string;
    email: string;
    phone_number: string;
    date_of_birth: string;
  } | null;
}

const Popup: FC<PopupProps> = ({ user }) => {
  const handleChange = (event: any) => {
    event.preventDefault();
    const newEmail = event.target.email.value;
    const newPhone = event.target.phone.value;
    const newDate = event.target.date.value;
    const userId = user!.user_id;
    updateUser(userId, newEmail, newPhone, newDate);

    console.log(newEmail);
  };

  return (
    <div className="popupDiv">
      <form
        action=""
        onSubmit={(event) => {
          handleChange(event);
        }}
      >
        <label>email:</label>
        <input type="text" name="email" defaultValue={user?.email} />

        <label>phone:</label>
        <input type="string" name="phone" defaultValue={user?.phone_number} />
        <label>email:</label>
        <input type="date" name="date" defaultValue={user?.date_of_birth} />

        <button type="submit">send Changes</button>
      </form>
    </div>
  );
};

export default Popup;
