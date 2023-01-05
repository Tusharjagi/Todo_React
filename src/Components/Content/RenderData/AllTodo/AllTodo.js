import "./all-todo.scss";
import DoneOutlineTwoToneIcon from "@mui/icons-material/DoneOutlineTwoTone";

const AllTodo = ({ data, values }) => {
  console.log(data);
  const displayData = data.map((lists) => {
    const handleDelete = () => {
      console.log("Handle Delete");
    };

    const handleEdit = () => {
      console.log("Handle Edit");
    };

    const handleDoneIcon = () => {
      console.log("check Icon");
    };

    return (
      <div key={lists} className="main-rendered-div">
        <DoneOutlineTwoToneIcon
          className="done-icon"
          onClick={handleDoneIcon}
          style={{ color: "green" }}
        />

        <button className="delete-button" onClick={handleDelete}>
          Delete
        </button>
        <button className="edit-button" onClick={handleEdit}>
          <span className="edit-text">Edit</span>
        </button>
        <span className="all-todo">
          <span className="todo-text">{lists}</span>
        </span>
        <div className="date">
          {values.date()} / {values.month() + 1} / {values.year()}
        </div>
        <div className="time">
          {values.hour()} : {values.minute()}
        </div>

        <hr className="hr-line" />
      </div>
    );
  });

  return <>{displayData}</>;
};

export default AllTodo;
