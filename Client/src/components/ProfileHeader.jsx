import Avatar from "../assets/Ellipse 593.png";
import Location from "../assets/location-marker.png";
import Button from "./Button";
import { useSelector } from "react-redux";
import Skeleton from "./Skeleton";

const ProfileHeader = () => {
  const { data, loading } = useSelector((state) => state.user);
  return (
    <div className="profile_header">
      {loading ? (
        <Skeleton className="h-24 w-24 rounded-full" />
      ) : (
        <img src={Avatar} alt="avatar" className="profile_avatar" />
      )}
      <div className="my-2 flex flex-col items-center">
        <span className="text-md font-semibold text-center">
          {loading ? <Skeleton className="h-4 w-24" /> : data?.name}
        </span>
        <div className="info">
          {loading ? (
            <Skeleton className="h-3 w-40" />
          ) : (
            <>
              <span className="info-text">{data?.age} Yrs</span>
              <span className="elipse bg-primary-purple"></span>
              <span className="info-text">{data?.gender}</span>
              <span className="elipse bg-primary-purple"></span>
              <span className="info-text">{data?.profession}</span>
            </>
          )}
        </div>
        <div className="address">
          {loading ? (
            <Skeleton className="h-3 w-40" />
          ) : (
            <>
              <img src={Location} alt="location" className="location-marker" />
              <span className="info-text">{data?.address}</span>
            </>
          )}
        </div>
      </div>
      {loading ? (
        <Skeleton className="h-10 w-full" />
      ) : (
        <Button>Hire Now</Button>
      )}
    </div>
  );
};

export default ProfileHeader;
