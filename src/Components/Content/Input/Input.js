import { useState } from "react";
import "./input.css";

const Input = () => {
  const [value, setValue] = useState('');
  const [inputText, setInputText] = useState([]);
  console.log(value);
  return (
    <>
      <input className="ToInput" spellCheck='false' type="text" placeholder="Add New Task" onChange={(e) => setValue(e.target.value) } />
    </>
  );
};

export default Input;
