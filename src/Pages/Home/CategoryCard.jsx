import { Link } from "react-router-dom";

const CategoryCard = ({ toy }) => {
  const { name, pictureUrl } = toy;
  // console.log(toy)
  return (
    <div className="card w-96 bg-error shadow-xl">
      <figure className="px-10 pt-10">
        <img className="rounded-xl" src={pictureUrl} alt={name} />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{toy.name}</h2>
        <p>Price: ${toy.price}</p>
        <p>Rating: {toy.rating}</p>
        <div className="card-actions">
          <Link to={`/alltoys/${toy._id}`}>
            <button className="btn btn-secondary text-white">
              {" "}
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
