import "./all-todo.css";
import DoneOutlineTwoToneIcon from "@mui/icons-material/DoneOutlineTwoTone";

const AllTodo = ({ data, values }) => {
  const displayData = data.map((lists) => {
    return (
      <div key={lists}>
        <DoneOutlineTwoToneIcon className="done" style={{ color: "green" }} />
        <button className="delete-button">Delete</button>
        <button className="edit-button">
          <span className="edit-text">Edit</span>
        </button>
        <span className="all-todo">
          {lists}
          <span>
            Date: {values.date()}/{values.month()}/{values.year()}{" "}
            Time: {values.hour()}:{values.minute()}
          </span>
        </span>
      </div>
    );
  });

  return <>{displayData}</>;
};

export default AllTodo;
