import React from "react";
import "./UserCard.scss";
import userAvatar from "../../../assets/photo-cover.svg";

const UserCard = ({
  user: { id, name, email, phone, position, registration_timestamp, photo },
}) => {
  return (
    <div className="userCard">
      <div className="userImg">
        <img
          src={photo ? photo : userAvatar}
          alt=""
        />
      </div>
      <p className="userName">{name}</p>
      <div className="userInfo">
        <p>{position}</p>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
    </div>
  );
};

export default UserCard;
