import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const MyToys = () => {

  const [toys, setToys] = useState([]);
  const [editingToy, setEditingToy] = useState(null);
  const [updatedPrice, setUpdatedPrice] = useState('');
  const [updatedQuantity, setUpdatedQuantity] = useState('');
  const [updatedDescription, setUpdatedDescription] = useState('');


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


  const handleEdit = (toy) => {
    setEditingToy(toy);
    setUpdatedPrice(toy.price);
    setUpdatedQuantity(toy.quantity);
    setUpdatedDescription(toy.description);
  };

  const handleUpdate = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/toys/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          price: updatedPrice,
          quantity: updatedQuantity,
          description: updatedDescription
        })
      });
      if (response.ok) {
        setToys((prevToys) =>
          prevToys.map((toy) =>
            toy._id === id
              ? {
                  ...toy,
                  price: updatedPrice,
                  quantity: updatedQuantity,
                  description: updatedDescription
                }
              : toy
          )
        );
        setEditingToy(null);
        alert('Toy updated successfully!');
      } else {
        throw new Error('Failed to update toy');
      }
    } catch (error) {
      console.error('Failed to update toy:', error);
      alert('Failed to update toy. Please try again.');
    }
  };

  return (
    <div>
    <h1>My Toys</h1>
    {toys.map((toy) => (
        <div key={toy._id}>
          {editingToy === toy ? (
            <div>
              <h3>{toy.name}</h3>
              <p>
                <label>
                  Price:
                  <input
                    type="text"
                    value={updatedPrice}
                    onChange={(e) => setUpdatedPrice(e.target.value)}
                  />
                </label>
              </p>
              <p>
                <label>
                  Quantity:
                  <input
                    type="text"
                    value={updatedQuantity}
                    onChange={(e) => setUpdatedQuantity(e.target.value)}
                  />
                </label>
              </p>
              <p>
                <label>
                  Description:
                  <textarea
                    value={updatedDescription}
                    onChange={(e) => setUpdatedDescription(e.target.value)}
                  />
                </label>
              </p>
              <button className="btn btn-secondary" onClick={() => handleUpdate(toy._id)}>Update</button>
            </div>
          ) : (
          <div>
            <h3>{toy.name}</h3>
            <p>Seller: {toy.sellerName}</p>
            <p>Price: ${toy.price}</p>
            <p>Rating: {toy.rating}</p>
            <p>Description: {toy.description}</p>
            <button className="btn btn-secondary" onClick={() => handleEdit(toy)}>Edit</button>
            <button className="btn btn-secondary" onClick={() => handleDelete(toy._id)}>Delete</button>
          </div>
        )}
        <hr />
      </div>
    ))}
  </div>
  );
};

export default MyToys;
