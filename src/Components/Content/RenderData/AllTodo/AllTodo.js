import "./all-todo.css";
import DoneOutlineTwoToneIcon from "@mui/icons-material/DoneOutlineTwoTone";

const AllTodo = ({ data, values }) => {
  console.log(
    values.date(),
    values.month(),
    values.year(),
    values.hour(),
    values.minute()
  );

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
            {values.date()}/{values.month()}/{values.year()}/{values.hour()}/
            {values.minute()}
          </span>
        </span>
      </div>
    );
  });

  return <>{displayData}</>;
};

export default AllTodo;
