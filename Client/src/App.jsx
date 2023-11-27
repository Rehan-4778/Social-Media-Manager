import { useEffect } from "react";
import Sidebar from "./components/Sidebar";
import ContentSection from "./components/ContentSection";
import { useDispatch } from "react-redux";
import { fetchUserData } from "./store/thunks/userThunk";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchUserData({
        userId: "65646ec935625e1ee5fd08b6",
      })
    );
  }, []);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-[28%]">
        <Sidebar />
      </div>
      <div className="w-full md:w-[72%]">
        <ContentSection />
      </div>
    </div>
  );
};

export default App;
