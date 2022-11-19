import Calender from "./Calender/Calender";
import "./input.css";

const Input = (props) => {
  return (
    <form onSubmit={props.onHandleSubmit} >
      <input
        className="ToInput"
        spellCheck="false"
        value={props.value}
        placeholder="Add New Task"
        onChange={(e) => props.onChange(e)}
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
