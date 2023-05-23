import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth/AuthProviders";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {
  useTitle('mytoys');

  const { user } = useContext(AuthContext);

  const [toys, setToys] = useState([]);
  const [editingToy, setEditingToy] = useState(null);
  const [updatedPrice, setUpdatedPrice] = useState("");
  const [updatedQuantity, setUpdatedQuantity] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");

  const [toysData, setToysData] = useState([]);
  useEffect(() => {
    fetch(`https://toy-server-plum.vercel.app/all-toys`)
      .then((res) => res.json())
      .then((data) => {
        const myToys = data.filter((toy) => toy.sellerEmail === user.email);
        setToysData(myToys);
      });
  }, []);

  useEffect(() => {
    if (toysData) {
      setToys(toysData);
    }
  }, [toysData]);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://toy-server-plum.vercel.app/toys/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setToys((prevToys) => prevToys.filter((toy) => toy._id !== id));
        alert("Toy deleted successfully!");
      } else {
        throw new Error("Failed to delete toy");
      }
    } catch (error) {
      console.error("Failed to delete toy:", error);
      alert("Failed to delete toy. Please try again.");
    }
  };

  const handleEdit = (toy) => {
    setEditingToy(toy);
    setUpdatedPrice(toy.price);
    setUpdatedQuantity(toy.quantity);
    setUpdatedDescription(toy.description);
  };

  const handleUpdate = async (id) => {
    try {
      const response = await fetch(`https://toy-server-plum.vercel.app/toys/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          price: updatedPrice,
          quantity: updatedQuantity,
          description: updatedDescription,
        }),
      });
      if (response.ok) {
        setToys((prevToys) =>
          prevToys.map((toy) =>
            toy._id === id
              ? {
                  ...toy,
                  price: updatedPrice,
                  quantity: updatedQuantity,
                  description: updatedDescription,
                }
              : toy
          )
        );
        setEditingToy(null);
        alert("Toy updated successfully!");
      } else {
        throw new Error("Failed to update toy");
      }
    } catch (error) {
      console.error("Failed to update toy:", error);
      alert("Failed to update toy. Please try again.");
    }
  };
// sorting system

const [sortOrder, setSortOrder] = useState('asc');

// Function to handle sorting by price
const handleSortByPrice = () => {
  setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
};

// Function to compare toy prices for sorting
const compareToyPrices = (a, b) => {
  const priceA = a.price;
  const priceB = b.price;

  if (priceA < priceB) {
    return sortOrder === 'asc' ? -1 : 1;
  }
  if (priceA > priceB) {
    return sortOrder === 'asc' ? 1 : -1;
  }
  return 0;
};
 // Sort the toys based on the selected sorting option
 const sortedToys = [...toys].sort(compareToyPrices);
  return (
    <div>
    <h1 className="text-3xl font-bold mb-4 text-center">My Toys</h1>
    <div className="flex justify-end mb-4">
      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
        onClick={handleSortByPrice}
      >
        Sort by Price {sortOrder === "asc" ? "↑" : "↓"}
      </button>
    </div>
    <div className="grid grid-cols-1  gap-4 mx-auto">
      {sortedToys.map((toy) => (
        <div key={toy._id} className="border border-gray-300 rounded p-4">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="rounded-lg md:w-56"
                src={toy.image}
                alt={toy.name}
              />
            </div>
            <div className="mt-4 md:mt-0 md:ml-6">
              {editingToy === toy ? (
                <div>
                  <h3 className="text-xl font-bold">{toy.name}</h3>
                  <p>
                    <label className="block">
                      Price:
                      <input
                        type="text"
                        value={updatedPrice}
                        onChange={(e) => setUpdatedPrice(e.target.value)}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </label>
                  </p>
                  <p>
                    <label className="block">
                      Quantity:
                      <input
                        type="text"
                        value={updatedQuantity}
                        onChange={(e) => setUpdatedQuantity(e.target.value)}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </label>
                  </p>
                  <p>
                    <label className="block">
                      Description:
                      <textarea
                        value={updatedDescription}
                        onChange={(e) =>
                          setUpdatedDescription(e.target.value)
                        }
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      ></textarea>
                    </label>
                  </p>
                  <button
                    className="btn btn-secondary mr-2"
                    onClick={() => handleUpdate(toy._id)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={() => setEditingToy(null)}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <div>
                  <h3 className="text-xl font-bold">{toy.name}</h3>
                  <p className="mb-2">
                    Seller: {toy.sellerName} ({toy.sellerEmail})
                  </p>
                  <p className="mb-2">Price: ${toy.price}</p>
                  <p className="mb-2">Rating: {toy.rating}</p>
                  <p className="mb-2">Sub Category: {toy.subCategory}</p>
                  <p className="mb-2">Description: {toy.description}</p>
                  <button
                    className="btn btn-secondary mr-2"
                    onClick={() => handleEdit(toy)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleDelete(toy._id)}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default MyToys;
