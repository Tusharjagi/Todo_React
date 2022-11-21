import "./all-todo.css";
import DoneOutlineTwoToneIcon from "@mui/icons-material/DoneOutlineTwoTone";

const AllTodo = ({ data, values }) => {
  // const date = values.date()
  // const month = values.month()
  // const year = values.year()

  const displayData = data.map((lists) => {
    const handleDelete = () => {
      console.log("Handle Delete");
    };

    const handleEdit = () => {
      console.log("Handle Edit");
    };

    return (
      <div key={lists}>
        {/* <button onClick={handleDelete} >check</button> */}
        <DoneOutlineTwoToneIcon className="done" style={{ color: "green" }} />

        <button className="delete-button" onClick={handleDelete}>
          Delete
        </button>
        <button className="edit-button" onClick={handleEdit}>
          <span className="edit-text">Edit</span>
        </button>
        <span className="all-todo">
          {lists}
          <span className="date">
            {values.date()}/{values.month()+1}/{values.year()}
          </span>
          <span className="time">
            {values.hour()}:{values.minute()}
          </span>
        </span>
      </div>
    );
  });

  return <>{displayData}</>;
};

export default AllTodo;
