import "./all-todo.css";
import DeleteButton from "./Icons/DeleteIcons";
import EditButtons from "./Icons/EditIcon";
import DoneOutlineTwoToneIcon from "@mui/icons-material/DoneOutlineTwoTone";

const AllTodo = () => {
  return (
    <div>
      <DoneOutlineTwoToneIcon className="done" style={{ color: "green" }} />
      <span className="all-todo">Here is your task </span>
    </div>
  );
};

export default AllTodo;
