const Tabs = ({ stats, selected, handleClick }) => {
  return (
    <div className="tab">
      {stats?.map((stat) => (
        <div className="tab-item" key={stat._id}>
          <button
            onClick={() => handleClick(stat.socialMedia)}
            className={`${selected === stat.socialMedia ? "active" : ""}`}
          >
            {stat.socialMedia}
          </button>
          <span className="bottom"></span>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
