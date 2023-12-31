import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
  useTitle('Alltoys');
  const toys = useLoaderData();
  // console.log(Toys);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredToys = toys.filter((toy) =>
    toy.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <h1 className="text-center font-bold text-2xl">All Toys</h1>
      <div className="my-4">
        
        <input
          type="text"
          id="search"
          placeholder="Search by Toy Name"
          className="border border-gray-300 rounded-md px-4 py-2 w-64"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Seller
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Toy Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Sub-category
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Available Quantity
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Image
            </th>
            <th className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredToys.slice(0,20).map((toy) => (
            <tr key={toy._id}>
              <td className="px-6 py-4 whitespace-nowrap">{toy.sellerName}</td>
              <td className="px-6 py-4 whitespace-nowrap">{toy.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{toy.subCategory}</td>
              <td className="px-6 py-4 whitespace-nowrap">${toy.price}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {toy.availableQuantity}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <img
                  src={toy.pictureUrl}
                  alt={toy.name}
                  className="h-20 w-20"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Link to={`/alltoys/${toy._id}`}>
                  <button className="btn btn-secondary text-white">
                    {" "}
                    View Details
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
