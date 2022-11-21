import "./content.css";
import Input from "./Input/Input";
import RenderData from "./RenderData/RenderData";
import { useState } from "react";
import dayjs from "dayjs";


const Content = () => {
  const [value, setValue] = useState("");
  const [inputText, setInputText] = useState([]);
  const [values, setValues] = useState(dayjs());


  const handleSubmit = (e) => {
    e.preventDefault();
    const data = [...inputText, value];
    setInputText(data);
    setValue("");
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  // Calender

  const handleChange = (newValue) => {
    setValues(newValue);
  };

  return (
    <div className="content">
      <Input onHandleSubmit={handleSubmit} onChange={onChange} value={value} values={values} handleChange={handleChange} />
      <RenderData data={inputText}  values={values} />
    </div>
  );
};

export default Content;
