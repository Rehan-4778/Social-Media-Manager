import ListItem from "./ListItem";
import Skeleton from "./Skeleton";

import { useSelector } from "react-redux";

const ActiveCampaigns = () => {
  const { data, loading } = useSelector((state) => state.user);

  return (
    <div className="campaigns">
      <div className="flex justify-between">
        <h1 className="heading">Active Campaigns</h1>
        <button className="view-all">View All</button>
      </div>
      <div className="campaigns-list">
        <div className="campaigns-head">
          <div className="title">
            <h3>Title</h3>
          </div>
          <p className="likes">Likes</p>
          <p className="views">Views</p>
          <p className="comments">Comments</p>
          <p className="revenue">Revenue</p>
        </div>
        <div className="campaigns-body">
          {loading ? (
            <Skeleton times={3}/>
          ) : (
            data?.campaigns?.map((campaign) => (
              <ListItem key={campaign._id} item={campaign} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ActiveCampaigns;
