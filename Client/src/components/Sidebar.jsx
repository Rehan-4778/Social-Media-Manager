import ProfileHeader from "./ProfileHeader";
import ProfileDetails from "./ProfileDetails";
import { useSelector } from "react-redux";
import Skeleton from "./Skeleton";

const Sidebar = () => {
  const { data, loading } = useSelector((state) => state.user);

  return (
    <div className="h-auto sm:h-screen bg-primary-offwhite">
      <ProfileHeader />

      {/* Rating Component */}
      <ProfileDetails title="Ratings">
        {loading ? (
          <Skeleton className="h-3 my-2" />
        ) : (
          data?.ratings.map((item) => (
            <div className="flex items-center justify-between" key={item.title}>
              <span className="profile_details_item">{item.title}</span>
              <span className="profile_details_item_rating">{item.rating}</span>
            </div>
          ))
        )}
      </ProfileDetails>

      {/* Awards Component */}
      <ProfileDetails title="Awards">
        {loading ? (
          <Skeleton times={3} className="h-3 my-2" />
        ) : (
          data?.awards?.map((data) => (
            <div key={data.title}>
              <span className="profile_details_item">
                {data.title} - {data.year}
              </span>
            </div>
          ))
        )}
      </ProfileDetails>

      {/* Recent Mentions Component */}
      <ProfileDetails title="Recent Mentions">
        {loading ? (
          <Skeleton times={3} className="h-3 my-2" />
        ) : (
          data?.mentions?.map((data) => (
            <div key={data.title}>
              <span className="profile_details_item">
                {data.title} - {data.city}
              </span>
            </div>
          ))
        )}
      </ProfileDetails>
    </div>
  );
};

export default Sidebar;
