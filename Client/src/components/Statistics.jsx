import { useState } from "react";
import Tabs from "./Tabs";
import StatList from "./StatList";
import { useSelector } from "react-redux";
import Skeleton from "./Skeleton";

const Statistics = () => {
  const { data, loading } = useSelector((state) => state.user);
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
        {loading ? (
          <>
            <Skeleton className="h-9"/>
            <div className="w-full sm:w-[90%] flex justify-between my-2 sm:ps-8">
              <Skeleton times={5} className="w-12 sm:w-20 h-8 sm:h-16" />
            </div>
          </>
        ) : (
          data?.statistics?.map(
            (stat) =>
              stat.socialMedia === selected && (
                <StatList key={stat._id} stat={stat} />
              )
          )
        )}
      </div>
    </div>
  );
};

export default Statistics;
