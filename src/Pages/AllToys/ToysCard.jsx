import { Link } from "react-router-dom";

const ToysCard = ({ toy }) => {
  // console.log(toy);
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img className="h-full"  src={toy.pictureUrl} alt={toy.name} />
      </figure>
      <div className="card-body w-full">
        <h2>{toy.sellerName}</h2>
        <p>{toy.name}</p>
        <p>{toy.subCategory}</p>
        <p>{toy.price}</p>
        <p>{toy.availableQuantity}</p>
        <div className="card-actions justify-end">
          <Link to={`/alltoys/${toy._id}`}>
            <button className="btn btn-secondary text-white"> View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToysCard;
