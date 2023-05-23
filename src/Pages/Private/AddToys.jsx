import Swal from 'sweetalert2'

import { useContext } from "react";
import { AuthContext } from "../auth/AuthProviders";
import useTitle from '../../hooks/useTitle';

const AddToys = () => {

  useTitle('addToys');

  const { user } = useContext(AuthContext);
  const handleAddToys = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const availableQuantity = form.availableQuantity.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const subCategory = form.subCategory.value;
    const description = form.description.value;
    const pictureUrl = form.pictureUrl.value;
    const sellerEmail = form.sellersEmail.value;
    const sellerName = form.sellerName.value;

    const newToy = {
      name,
      availableQuantity,
      rating,
      price,
      subCategory,
      description,
      pictureUrl,
      sellerName,
      sellerEmail,
    };

    // console.log(newToy);

    // send data to the server
    fetch("https://toy-server-plum.vercel.app/add-toys", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Toy Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  
     
  };

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Add a Toy</h2>
      <form onSubmit={handleAddToys} className="max-w-lg mx-auto">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Toy Name</label>
            <input
              type="text"
              name="name"
              placeholder="Toy Name"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Available Quantity</label>
            <input
              type="text"
              name="availableQuantity"
              placeholder="Available Quantity"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Rating</label>
            <input
              type="text"
              name="rating"
              placeholder="Rating"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="text"
              name="price"
              placeholder="Price"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Sub Category</label>
            <select
      name="subCategory"
      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
    >
      <option value="DC">DC</option>
      <option value="Marvel">Marvel</option>
      <option value="Transformers">Transformers</option>
    </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <input
              type="text"
              name="description"
              placeholder="Description"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Seller Name</label>
            <input
              type="text"
              name="sellerName"
              placeholder="Seller Name"
              value={user?.displayName}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Seller's Email</label>
            <input
              type="text"
              name="sellersEmail"
              placeholder="Seller's Email"
              value={user?.email}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700">Photo URL</label>
          <input
            type="text"
            name="pictureUrl"
            placeholder="Photo URL"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Toy
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddToys;
