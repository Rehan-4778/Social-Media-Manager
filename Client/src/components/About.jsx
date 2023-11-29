import Cross from "../assets/close-circle.png";
import { useSelector } from "react-redux";
import Skeleton from "./Skeleton";

const About = () => {
  const { data, loading } = useSelector((state) => state.user);
  return (
    <div className="about">
      <img src={Cross} alt="cross" className="cross" />
      <h1 className="heading">About {data?.name?.split(" ")[0]}</h1>
      <p className="para">{loading ? <Skeleton className="h-24 sm:h-16" /> : data?.about}</p>
    </div>
  );
};

export default About;
