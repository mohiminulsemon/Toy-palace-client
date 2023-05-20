// import Swal from 'sweetalert2'

const AddToys = () => {
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

    const newToy = {
      name,
      availableQuantity,
      rating,
      price,
      subCategory,
      description,
      pictureUrl,
    };

    // console.log(newToy);

    // send data to the server
    fetch("http://localhost:5000/add-toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // if (data.insertedId) {
        //   Swal.fire({
        //     title: "Success!",
        //     text: "Coffee Added Successfully",
        //     icon: "success",
        //     confirmButtonText: "Cool",
        //   });
        // }
      });
  };

  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold">Add a Toy</h2>
      <form onSubmit={handleAddToys}>
        {/* form name and quantity row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Toy Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Toy Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="availableQuantity"
                placeholder="Available Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form supplier row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="rating"
                placeholder="Rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form category and details row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Sub Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="subCategory"
                placeholder="subCategory"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="description"
                placeholder="Description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form Photo url row */}
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="pictureUrl"
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Add Toy" className="btn btn-block" />
      </form>
    </div>
  );
};

export default AddToys;
