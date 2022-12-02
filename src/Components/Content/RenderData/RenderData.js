import AllTodo from "./AllTodo/AllTodo";
import "./render-data.scss";

const RenderData = ({ data, values }) => {
  const LoadingData = data.length ? (
    <div className="render-data">
      <AllTodo data={data} values={values} />
    </div>
  ) : (
    ""
  );

  return <>{LoadingData}
  </>;
};

export default RenderData;
