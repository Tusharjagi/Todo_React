import { useState } from "react";
import Calender from "./Calender/Calender";
import "./input.css";

const Input = () => {
  const [value, setValue] = useState("");
  const [inputText, setInputText] = useState([]);
  console.log(inputText);

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = [...inputText,value];
    setInputText(data);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} >
      <input
        className="ToInput"
        spellCheck="false"
        // type="text"
        value={value}
        placeholder="Add New Task"
        onChange={(e) => setValue(e.target.value)}
      />
      <Calender />
      <button
        className="add-button"
        
        type="submit"
      >
        ADD
      </button>
    </form>
  );
};

export default Input;
