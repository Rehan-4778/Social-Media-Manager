import { useState } from "react";
import Tabs from "./Tabs";
import StatList from "./StatList";
import { useSelector } from "react-redux";

const Statistics = () => {
  const data = useSelector((state) => state.user.data);
  const [selected, setSelected] = useState("Facebook");

  const handleClick = (socialMedia) => {
    setSelected(socialMedia);
  };

  return (
    <div className="stats">
      <h1 className="heading">Statistics</h1>
      <Tabs
        stats={data?.statistics}
        selected={selected}
        handleClick={handleClick}
      />
      <div className="stats-container">
        {data?.statistics?.map(
          (stat) =>
            stat.socialMedia === selected && (
              <StatList key={stat._id} stat={stat} />
            )
        )}
      </div>
    </div>
  );
};

export default Statistics;
