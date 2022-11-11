import { Link } from "react-router-dom";

function CategoryItem(props) {
  const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } =
    props;
  return (
    <div className="card">
      {idCategory}
      <div className="card-image">
        <img src={strCategoryThumb} />
      </div>
      <div className="card-content">
        <span className="card-title">{strCategory}</span>
        <p>{strCategoryDescription.slice(0, 90)}...</p>
      </div>
      <div className="card-action">
        <Link to={`/category/:${strCategory}`} className="btn">Watch category</Link>
      </div>
    </div>
  );
}

export { CategoryItem };
