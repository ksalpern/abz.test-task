import React from "react";
import "./UserCard.scss";
import userAvatar from "../../../assets/photo-cover.svg";
import Tooltip from "../../UIcomponents/Tooltip/Tooltip";

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
      <Tooltip title={name} position='bottom'>
        <p className="userName">{name}</p>
      </Tooltip>
      <div className="userInfo">
        <Tooltip title={position} position='bottom'>
          <p>{position}</p>
        </Tooltip>
        <Tooltip title={email} position='bottom'>
          <p>{email}</p>
        </Tooltip>
        <Tooltip title={phone} position='bottom'>
          <p>{phone}</p>
        </Tooltip>
      </div>
    </div>
  );
};

export default UserCard;
