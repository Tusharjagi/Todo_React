import "./input.scss";
import AddButton from "../AddButton/AddButton";
import Calender from "./Calender/Calender";

const Input = ({onHandleSubmit, value, onChange, values, handleChange }) => {

  return (
    <form onSubmit={onHandleSubmit}>
      <input
        className="ToInput"
        spellCheck="false"
        value={value}
        placeholder="Add New Task"
        onChange={(e) => onChange(e)}
      />
      <Calender value={values} handleChange={handleChange} />
      <AddButton onHandleSubmit={onHandleSubmit} />
    </form>
  );
};

export default Input;
