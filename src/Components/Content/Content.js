import AddButton from "./AddButton/AddButton";
import "./content.css";
import Input from "./Input/Input";
import RenderData from "./RenderData/RenderData";

const Content = () => {
  return (
    <div className="content">
      <Input />
      <AddButton />
      <RenderData/>
    </div>
  );
};

export default Content;
