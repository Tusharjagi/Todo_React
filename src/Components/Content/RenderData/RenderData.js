import AllTodo from "./AllTodo/AllTodo"
import "./render-data.css";

const RenderData = ({data}) => {
  return(
    <div className="render-data">
      <AllTodo data={data} />
    </div>
  )
};

export default RenderData;