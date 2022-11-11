import {
  useParams,
  useHistory,
  useRouteMatch,
  useLocation,
} from "react-router-dom";

function Recipe() {
  const { title } = useParams();
  const { goBack } = useHistory();
  const value = useRouteMatch();
  const value2 = useLocation();

  console.log(value);
  console.log(value2);

  return (
    <>
      <div className="recipe">
        <img src="" alt="" />
        <h1>""</h1>
        <h6>Category: ""</h6>
        <h6>Area: </h6> :<p></p>
        <table className="centered">
          <thead>
            <tr>
              <th>Ingredient</th>
              <th>Measure</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        <div className="row">
          <h5 style={{ margin: "2rem 0 1.5rem" }}>Video Recipe</h5>
          <iframe title="" src="" allowfullscreen />
        </div>
      </div>
      <button className="btn" onClick={goBack}>
        Go Back
      </button>
    </>
  );
}

export { Recipe };
