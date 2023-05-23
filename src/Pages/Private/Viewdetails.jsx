import { useLoaderData } from "react-router-dom";

const Viewdetails = () => {
  const toy = useLoaderData();
    // console.log(toy);
  return (
    <div className="flex h-screen">
    <div className="w-1/2 flex items-center justify-center">
      <img
        src={toy.pictureUrl}
        alt={toy.name}
        className="w-full h-3/6 object-contain"
      />
    </div>
    <div className="w-1/2 bg-gray-100 flex items-center justify-center p-8">
      <div>
        <h2 className="text-3xl font-bold mb-4">{toy.name}</h2>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Seller Name: </span>
          {toy.sellerName}
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Seller Email: </span>
          {toy.sellerEmail}
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Subcategory: </span>
          {toy.subCategory}
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Price: </span>
          {toy.price}
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Rating: </span>
          {toy.rating}
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Available Quantity: </span>
          {toy.availableQuantity}
        </p>
      </div>
    </div>
  </div>
  );
};

export default Viewdetails;
