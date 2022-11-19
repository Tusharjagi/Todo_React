import "./all-todo.css";
import DoneOutlineTwoToneIcon from "@mui/icons-material/DoneOutlineTwoTone";

const AllTodo = ({data}) => {
  const displayData = data.map((items) => {

    return (
      <div key={items} >
        <DoneOutlineTwoToneIcon className="done" style={{ color: "green" }} />
        <button className="delete-button" >Delete</button>
        <button className="edit-button" ><span className="edit-text" >Edit</span></button>
        <span className="all-todo">{ items }</span>
      </div>
    );

  });

  return(
    <>
      {displayData}
    </>
  ) ;
  
};

export default AllTodo;
