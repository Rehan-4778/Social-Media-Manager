import ProfileHeader from "./ProfileHeader";
import ProfileDetails from "./ProfileDetails";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const data = useSelector((state) => state.user.data);
  
  return (
    <div className="h-auto sm:h-screen bg-primary-offwhite">
      <ProfileHeader />

      {/* Rating Component */}
      <ProfileDetails title="Ratings">
        {data?.ratings.map((item) => (
          <div className="flex items-center justify-between" key={item.title}>
            <span className="profile_details_item">{item.title}</span>
            <span className="profile_details_item_rating">{item.rating}</span>
          </div>
        ))}
      </ProfileDetails>

      {/* Awards Component */}
      <ProfileDetails title="Awards">
        {data?.awards?.map((data) => (
          <div key={data.title}>
            <span className="profile_details_item">
              {data.title} - {data.year}
            </span>
          </div>
        ))}
      </ProfileDetails>

      {/* Recent Mentions Component */}
      <ProfileDetails title="Recent Mentions">
        {data?.mentions?.map((data) => (
          <div key={data.title}>
            <span className="profile_details_item">
              {data.title} - {data.city}
            </span>
          </div>
        ))}
      </ProfileDetails>
    </div>
  );
};

export default Sidebar;
