import "./content.css";
import Input from "./Input/Input";
import RenderData from "./RenderData/RenderData";
import { useState } from "react";

const Content = () => {

  const [value, setValue] = useState("");
  const [inputText, setInputText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = [...inputText,value];
    setInputText(data);
    setValue('');
  };

  const onChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div className="content">
      <Input onHandleSubmit={handleSubmit} onChange={onChange} value={value} />
      <RenderData data={inputText} />
    </div>
  );
};

export default Content;
