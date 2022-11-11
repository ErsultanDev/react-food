import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getFilteredCategory } from "react-router-dom";

function Category() {
  const { name } = useParams();
  return (
    <>
      <Link to="/" className="btn" style={'di'}>
        Go Back
    
      </Link>
    </>
  );
}

export { Category };
