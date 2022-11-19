import AllTodo from "./AllTodo/AllTodo"
import "./render-data.css";

const RenderData = ({data, values}) => {
  return(
    <div className="render-data">
      <AllTodo data={data} values={values} />
    </div>
  )
};

export default RenderData;