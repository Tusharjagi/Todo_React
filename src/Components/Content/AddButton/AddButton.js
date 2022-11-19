import "./add-button.css";

const AddButton = ({ onHandleSubmit }) => {
  return (
    <button className="add-button" type="submit" onClick={onHandleSubmit} >
      ADD
    </button>
  );
};

export default AddButton;
