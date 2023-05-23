import { Link } from "react-router-dom";

const ToysCard = ({ toy }) => {
  // console.log(toy);
  return (
    <div className="card card-side shadow-xl">
      <figure className="w-1/2 ">
        <img className=""  src={toy.pictureUrl} alt={toy.name} />
      </figure>
      <div className="card-body w-1/2">
       { toy.selllerName && (<h2><span className="font-bold">Seller :</span> {toy.sellerName}</h2>)}
        <p><span className="font-bold">Name:</span> {toy.name}</p>
        <p><span className="font-bold">sub category:</span> {toy.subCategory}</p>
        <p><span className="font-bold">Price:</span> ${toy.price}</p>
        <p><span className="font-bold">Available quantity:</span> {toy.availableQuantity}</p>
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
