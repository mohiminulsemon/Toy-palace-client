
import { useLoaderData} from "react-router-dom";


const Viewdetails = () => {
  const toy = useLoaderData();
//   console.log(toy);
    return (
        <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={toy.pictureUrl} alt={toy.name} />
        </figure>
        <div className="card-body">
          <h2>{toy.sellerName}</h2>
          <p>{toy.name}</p>
          <p>{toy.subCategory}</p>
          <p>{toy.price}</p>
          <p>{toy.availableQuantity}</p>
        </div>
      </div>
    );
};

export default Viewdetails;