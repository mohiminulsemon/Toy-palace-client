import { Link } from "react-router-dom";

const CategoryCard = ({ toy }) => {
  const { name, pictureUrl } = toy;
  // console.log(toy)
  return (
    <div className="card bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
        <img className="object-cover object-center w-full " src={pictureUrl} alt={name} />
      </div>
      <div className="p-4">
        <h2 className="text-white text-2xl font-bold mb-2">{name}</h2>
        <p className="text-white mb-2">Price: ${toy.price}</p>
        <p className="text-white mb-4">Rating: {toy.rating}</p>
        <div className="flex justify-center">
          <Link to={`/alltoys/${toy._id}`}>
            <button className="bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
