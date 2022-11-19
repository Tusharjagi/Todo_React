import AddButton from "../AddButton/AddButton";
import Calender from "./Calender/Calender";
import "./input.css";

const Input = ({onHandleSubmit, value, onChange}) => {
  return (
    <form onSubmit={onHandleSubmit}>
      <input
        className="ToInput"
        spellCheck="false"
        value={value}
        placeholder="Add New Task"
        onChange={(e) => onChange(e)}
      />
      <Calender />
      <AddButton onHandleSubmit={onHandleSubmit} />
    </form>
  );
};

export default Input;
