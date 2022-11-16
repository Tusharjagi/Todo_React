import "./all-todo.css";
import DeleteButton from "./Icons/DeleteIcons";
import EditButtons from "./Icons/EditIcon";

const AllTodo = () => {
  return (
    <>
      <div className="all-todo">Here is your task </div>
      <DeleteButton/>
      <EditButtons/>
    </>
  );
};

export default AllTodo;
