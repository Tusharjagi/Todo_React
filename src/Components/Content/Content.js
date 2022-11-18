import "./content.css";
import Calender from "./Input/Calender/Calender";
import Input from "./Input/Input";
import RenderData from "./RenderData/RenderData";

const Content = () => {
  return (
    <div className="content">
      <Input />
      <RenderData/>
    </div>
  );
};

export default Content;
