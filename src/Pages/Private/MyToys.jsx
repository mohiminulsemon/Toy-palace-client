import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const MyToys = () => {

  const [toys, setToys] = useState([]);
  const toysData = useLoaderData();
  useState(() => {
    if (toysData) {
      setToys(toysData);
    }
  }, [toysData]);



  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/toys/${id}`, {
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

  return (
    <div>
      <h1>My Toys</h1>
      {toys.map((toy) => (
        <div key={toy._id}>
          <h3>{toy.name}</h3>
          <p>Seller: {toy.sellerName}</p>
          <p>Price: ${toy.price}</p>
          <p>Rating: {toy.rating}</p>
          <p>Description: {toy.description}</p>
          <button
            className="btn btn-secondary text-white"
            onClick={() => handleDelete(toy._id)}
          >
            Delete
          </button>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default MyToys;
