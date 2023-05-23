import { useContext} from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthProviders";

const SignUp = () => {
  const { createUser, setuserprofilepicture } = useContext(AuthContext);

//   const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  // console.log('register page location', location)

  const from = location.state?.from?.pathname || "/";
  // console.log(from);

  const handleRegister = (event) => {
    event.preventDefault();
    // setError();

    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(name, photo, email, password)

    //validation

    // if (password.length < 6) {
    //   setError("Please add at least 6 characters in your password");
    //   return;
    // }

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        // setError("");
        setuserprofilepicture(name, photo)
          .then((result) => {
            console.log(result.displayName);
          })
          .catch((error) => {
            console.log(error);
          });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div className="max-w-md w-full mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">Sign Up Now!</h1>
      <div className="bg-white shadow-md rounded px-8 py-6">
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
              Photo URL
              </label>
              <input
                type="text"
                placeholder="photo URL"
                name="photo"
                className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-indigo-500"
              />
            </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-500 font-bold">
            Login here
          </Link>
        </p>
      </div>
    </div>
  </div>
  );
};

export default SignUp;
