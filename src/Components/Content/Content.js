import "./content.scss";
import Input from "./Input/Input";
import RenderData from "./RenderData/RenderData";
import { useState } from "react";
import dayjs from "dayjs";

const Content = () => {
  const [textValue, setTextValue] = useState("");
  const [dayAndTime, setDayAndTime] = useState(dayjs());
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = { textValue };
    const time = { dayAndTime };

    // let  = [{...text},{...time}];
    // setData(text, time,arr);
    // const key = key + 1;
    // const dataa = [{...textValue, data}, {...dayAndTime,da}]
    // console.log(
    //   `TextValue - ${text.textValue},\ndatAndTime - ${time.dayAndTime}`
    // );
    console.log(data);
    setTextValue("");
  };

  const onChange = (e) => {
    setTextValue(e.target.value);
  };

  const handleChange = (newValue) => {
    setDayAndTime(newValue);
  };

  return (
    <div className="content">
      <Input
        onHandleSubmit={handleSubmit}
        onChange={onChange}
        value={textValue}
        values={dayAndTime}
        handleChange={handleChange}
      />
      {/* <RenderData data={inputText} values={inputDateTime} /> */}
    </div>
  );
};

export default Content;
