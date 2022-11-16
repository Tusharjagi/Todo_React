import AddButton from "./AddButton/AddButton";
import "./content.css";
import Calender from "./Input/Calender/Calender";
import Input from "./Input/Input";
import RenderData from "./RenderData/RenderData";

const Content = () => {
  return (
    <div className="content">
      <Input />
      <Calender/>
      <AddButton />
      <RenderData/>
    </div>
  );
};

export default Content;
