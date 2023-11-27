import Cross from "../assets/close-circle.png";
import { useSelector } from "react-redux";

const About = () => {
  const data = useSelector((state) => state.user.data);
  return (
    <div className="about">
      <img src={Cross} alt="cross" className="cross" />
      <h1 className="heading">About {data?.name?.split(" ")[0]}</h1>
      <p className="para">
       {data?.about}
      </p>
    </div>
  );
};

export default About;
