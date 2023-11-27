import Instagram from "../assets/instagram 1.png";
import Tiktok from "../assets/tik-tok 1.png";
import Youtube from "../assets/youtube 1.png";
import { useNumberFormatter } from "../hooks/useNumberFormatter";

const ListItem = ({ item }) => {
  const formatNumber = useNumberFormatter();
  const social = {
    Instagram,
    Tiktok,
    Youtube,
  };

  return (
    <div className="campaigns-item">
      <div className="title_div">
        <img
          className="avatar-img"
          src={social[item.socialMedia]}
          alt="campaigns"
        />
        <h3 className="title">{item.title}</h3>
      </div>
      <p>{formatNumber(item.likes)}</p>
      <p>{formatNumber(item.views)}</p>
      <p>{formatNumber(item.comments)}</p>
      <p className="revenue">
        ${formatNumber(item.revenue.min)} - {formatNumber(item.revenue.max)}
      </p>
    </div>
  );
};

export default ListItem;
