import { Link, useLoaderData } from "react-router-dom";



const AllToys = () => {

    const toys = useLoaderData();
    // console.log(Toys);
    return (
        <div>
        <h1>All Toys</h1>
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
            {toys.map((toy) => (
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
            <button className="btn btn-secondary text-white"> View Details</button>
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