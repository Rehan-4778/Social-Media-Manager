import { useNumberFormatter } from "../hooks/useNumberFormatter";

const StatItem = ({ stat }) => {
  const formatNumber = useNumberFormatter();
  return (
    <div className="stat-list">
      <div className="stat-item">
        <p className="stat-item-value">{formatNumber(stat.followers)}</p>
        <p className="stat-item-label">Followers</p>
      </div>
      <div className="stat-item">
        <p className="stat-item-value">{formatNumber(stat.likes)}</p>
        <p className="stat-item-label">Likes</p>
      </div>
      <div className="stat-item">
        <p className="stat-item-value">{formatNumber(stat.comments)}</p>
        <p className="stat-item-label">Comments</p>
      </div>

      <div className="stat-item">
        <p className="stat-item-value">{formatNumber(stat.shares)}</p>
        <p className="stat-item-label">Shares</p>
      </div>

      <div className="stat-item">
        <p className="stat-item-value">{formatNumber(stat.revenue)}</p>
        <p className="stat-item-label">Revenue</p>
      </div>
    </div>
  );
};

export default StatItem;
