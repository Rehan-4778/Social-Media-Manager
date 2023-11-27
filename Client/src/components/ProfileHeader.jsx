import Avatar from "../assets/Ellipse 593.png";
import Location from "../assets/location-marker.png";
import Button from "./Button";
import { useSelector } from "react-redux";

const ProfileHeader = () => {
  const data = useSelector((state) => state.user.data);
  return (
    <div className="profile_header">
      <img src={Avatar} alt="avatar" className="profile_avatar" />
      <div className="my-2 flex flex-col items-center">
        <span className="text-md font-semibold text-center">{data?.name}</span>
        <div className="info">
          <span className="info-text">{data?.age} Yrs</span>
          <span className="elipse bg-primary-purple"></span>
          <span className="info-text">{data?.gender}</span>
          <span className="elipse bg-primary-purple"></span>
          <span className="info-text">{data?.profession}</span>
        </div>
        <div className="address">
          <img src={Location} alt="location" className="location-marker" />
          <span className="info-text">{data?.address}</span>
        </div>
      </div>
      <Button>Hire Now</Button>
    </div>
  );
};

export default ProfileHeader;
